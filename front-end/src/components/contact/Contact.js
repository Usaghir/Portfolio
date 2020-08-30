import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div style={{ backgroundColor: '#F7FFF7' }}>
      <div className="container w-50" id="contact">
        <h1 className="  font-weight-bold">CONTACT</h1>
        <div class="underline-bar mb-5"></div>
        <form
          className=" needs-validation card  m-2 p-2  border-0"
          style={{ backgroundColor: '#F7FFF7' }}
          onSubmit={1}
        >
          <div className="form-col " style={{ backgroundColor: '#F7FFF7' }}>
            <div className="form-group ">
              <input
                type="text"
                className="form-control input-group-append border-0 text-light"
                style={{ backgroundColor: '#2b7a78' }}
                id="inputEmail4"
                placeholder="First Name"
                value="Name"
                onChange={1}
                name="firstName"
                required
              ></input>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control  border-0 text-light "
                style={{ backgroundColor: '#2b7a78' }}
                id="inputEmail4"
                placeholder="Email"
                value="Email"
                onChange={1}
                name="email"
                required
              ></input>
            </div>

            <div class="form-group">
              <textarea
                class="form-control border-0 text-white "
                style={{ backgroundColor: '#2b7a78' }}
                id="message"
                name="message"
                placeholder="Enter your massage for us here. We will get back to you within 2 business days."
                rows="7"
              ></textarea>
            </div>
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn  w-25 mb-2 "
              style={{ backgroundColor: '#2b7a78' }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
