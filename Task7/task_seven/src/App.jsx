
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

function App() {
  const [formData, setFormData] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name, email });
    // Hide modal after submit
    const modal = window.bootstrap?.Modal.getOrCreateInstance(document.getElementById('formModal'));
    modal?.hide();
    setName('');
    setEmail('');
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ maxWidth: 450, width: '100%' }}>
        <div className="text-center mb-4">
          <i className="bi bi-person-circle" style={{ fontSize: 48, color: '#0d6efd' }}></i>
          <h2 className="fw-bold mt-2 mb-3" style={{ color: '#0d6efd' }}>React Bootstrap Modal</h2>
        </div>
        <button
          type="button"
          className="btn btn-primary w-100 mb-3 fw-semibold shadow-sm"
          data-bs-toggle="modal"
          data-bs-target="#formModal"
        >
          <i className="bi bi-pencil-square me-2"></i>Open Form
        </button>

        {formData && (
          <div className="alert alert-success mt-3 animate__animated animate__fadeIn">
            <h5 className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Submitted Data</h5>
            <div className="mb-1"><strong>Name:</strong> {formData.name}</div>
            <div><strong>Email:</strong> {formData.email}</div>
          </div>
        )}
      </div>

      {/* Modal */}
      <div className="modal fade" id="formModal" tabIndex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content rounded-4">
            <div className="modal-header bg-primary text-white rounded-top-4">
              <h5 className="modal-title fw-bold" id="formModalLabel">
                <i className="bi bi-person-lines-fill me-2"></i>User Information
              </h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body bg-light">
              <form onSubmit={handleSubmit} autoComplete="off">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">Name</label>
                  <input
                    type="text"
                    className="form-control rounded-pill px-3"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">Email</label>
                  <input
                    type="email"
                    className="form-control rounded-pill px-3"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                  />
                </div>
                <div className="modal-footer border-0 px-0">
                  <button type="button" className="btn btn-outline-secondary rounded-pill px-4" data-bs-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary rounded-pill px-4 fw-semibold">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
