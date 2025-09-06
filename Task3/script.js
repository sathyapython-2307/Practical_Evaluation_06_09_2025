document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const taskCount = document.getElementById('task-count');

    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask();
    });
    taskList.addEventListener('click', handleTaskClick);

    function updateTaskCount() {
        const count = taskList.children.length;
        taskCount.textContent = count;
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center task-item';
            li.innerHTML = `
                <div class="task-content">
                    <i class="far fa-circle check-icon"></i>
                    <span class="task-text">${taskText}</span>
                </div>
                <div class="task-actions">
                    <button class="btn edit-btn" title="Edit">
                        <i class="fas fa-pencil-alt"></i>
                    </button>
                    <button class="btn delete-btn" title="Delete">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            `;
            taskList.appendChild(li);
            taskInput.value = '';
            updateTaskCount();
            
            // Animation
            li.style.opacity = '0';
            li.style.transform = 'translateY(20px)';
            setTimeout(() => {
                li.style.opacity = '1';
                li.style.transform = 'translateY(0)';
            }, 50);
        }
    }

    function handleTaskClick(e) {
        const li = e.target.closest('.task-item');
        if (!li) return;

        if (e.target.classList.contains('fa-circle') || e.target.classList.contains('fa-check-circle')) {
            const icon = e.target;
            const taskText = li.querySelector('.task-text');
            
            if (icon.classList.contains('fa-circle')) {
                icon.classList.remove('far', 'fa-circle');
                icon.classList.add('fas', 'fa-check-circle');
                taskText.classList.add('completed');
            } else {
                icon.classList.remove('fas', 'fa-check-circle');
                icon.classList.add('far', 'fa-circle');
                taskText.classList.remove('completed');
            }
        } else if (e.target.closest('.delete-btn')) {
            li.style.opacity = '0';
            li.style.transform = 'translateX(100px)';
            setTimeout(() => {
                taskList.removeChild(li);
                updateTaskCount();
            }, 300);
        } else if (e.target.closest('.edit-btn')) {
            const taskText = li.querySelector('.task-text');
            const currentText = taskText.textContent;
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'edit-input';
            input.value = currentText;
            
            taskText.replaceWith(input);
            input.focus();

            input.addEventListener('blur', function() {
                const newText = this.value.trim();
                if (newText) {
                    const newSpan = document.createElement('span');
                    newSpan.className = 'task-text';
                    newSpan.textContent = newText;
                    this.replaceWith(newSpan);
                }
            });

            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    this.blur();
                }
            });
        }
    }
});
