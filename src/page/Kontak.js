import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Kontak = () => {

  const pesan = () => {
    alert('Terima kasih boss!');
    window.location.reload();

  };

  return (
 
    <div className="bg-black d-flex align-items-center min-vh-200">
      <div className="container">
        <h2 className="text-white text-center mb-4">My Contact</h2>
        <form style={{ maxwidth: '700px', margin: '0 auto' }}>
          <div className="form-group mb-3">
            <label htmlFor="name" className="text-white">Name:</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email" className="text-white">Email:</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="message" className="text-white">Message:</label>
            <textarea className="form-control" id="message" rows="4" placeholder="Enter your message" required></textarea>
          </div>
          <button type="button" className="btn btn-primary" onClick={pesan}>Submit</button>
        </form>
        </div>
      </div>
  
  );
};

export default Kontak;
