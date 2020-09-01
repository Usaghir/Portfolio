import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

function Contact() {
  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
    submitMessage: false,
  });

  const changeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post('/send', {
        name: state.name,
        email: state.email,
        message: state.message,
      })
      .then((res) => {
        setState({
          submitMessage: true,
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div style={{ backgroundColor: '#F7FFF7' }}>
      <div className="container w-50" id="contact">
        <h1 className="  font-weight-bold">CONTACT</h1>
        <div className="underline-bar mb-5"></div>
        <form
          className=" needs-validation card  m-2 p-2  border-0"
          style={{ backgroundColor: '#F7FFF7' }}
          onSubmit={submitHandler}
        >
          <div className="form-col " style={{ backgroundColor: '#F7FFF7' }}>
            <div className="form-group ">
              <input
                type="text"
                className="form-control border-0 "
                style={{ color: '#ffffff', backgroundColor: '#17252a' }}
                id="inputEmail4"
                placeholder="Name"
                value={state.name}
                onChange={changeHandler}
                name="name"
                required
              ></input>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control  border-0 "
                style={{ color: '#ffffff', backgroundColor: '#17252a' }}
                id="inputEmail4"
                placeholder="Email"
                value={state.email}
                onChange={changeHandler}
                name="email"
                required
              ></input>
            </div>

            <div className="form-group">
              <textarea
                className="form-control border-0 "
                style={{ color: '#ffffff', backgroundColor: '#17252a' }}
                id="message"
                name="message"
                value={state.message}
                onChange={changeHandler}
                placeholder="Enter your massage for us here. We will get back to you within 2 business days."
                rows="7"
                required
              ></textarea>
            </div>
          </div>
          {state.submitMessage ? (
            <div className="form-group ">
              <div
                className="form-control  border-0 pl-3 "
                style={{ background: '#17252a', color: '#ffffff' }}
              >
                Thanks for sending the message will get back as soon as possible.
              </div>
            </div>
          ) : (
            ''
          )}
          <div className="form-group">
            <button
              type="submit"
              className="btn mb-2 "
              style={{ color: '#ffffff', backgroundColor: '#17252a' }}
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
