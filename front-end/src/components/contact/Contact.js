import React from 'react';

function Contact() {
  return (
    <div className="container mt-3 w-50 pt-3">
      <form className=" needs-validation card  m-2 p-2  border-0" onSubmit={1}>
        <div className="form-col">
          <div className="form-group ">
            <input
              type="text"
              className="form-control input-group-append border-0 text-light bg-dark"
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
              className="form-control  border-0 text-light bg-dark"
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
              class="form-control border-0 text-white bg-dark"
              id="message"
              name="message"
              placeholder="Enter your massage for us here. We will get back to you within 2 business days."
              rows="7"
            ></textarea>
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary w-25 mb-2 ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
