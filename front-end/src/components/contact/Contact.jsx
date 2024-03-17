import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import './Contact.css';

function Contact() {
  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
    submitMessage: false,
  });

  function changeBackground(e) {
    e.target.style.background = '#17252a';
    e.target.style.color = '#f7ffff';
  }

  function revertBackground(e) {
    e.target.style.background = 'transparent';
    e.target.style.color = '#17252a';
  }

  const changeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post('/api/send', {
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
    <div className='pt-5' style={{ backgroundColor: '#DEF2F1' }}>
      <div className='container pt-5 pb-5  w-50' id='contact'>
        <h1 className='  font-weight-bold'>CONTACT</h1>
        <div className='underline-bar mb-5'></div>
        <form
          className=' needs-validation card  pt-5  border-0'
          style={{ backgroundColor: '#DEF2F1' }}
          onSubmit={submitHandler}
        >
          <div className='form-col ' style={{ backgroundColor: '#DEF2F1' }}>
            <div className='form-group '>
              <input
                type='text'
                className='form-control border-0 rounded-0'
                style={{ color: '#DEF2F1', backgroundColor: '#17252a' }}
                id='inputEmail4'
                placeholder='Name*'
                value={state.name}
                onChange={changeHandler}
                name='name'
                required
              ></input>
            </div>
            <div className='form-group'>
              <input
                type='text'
                className='form-control  border-0 rounded-0'
                style={{ color: '#DEF2F1', backgroundColor: '#17252a' }}
                id='inputEmail4'
                placeholder='Email*'
                value={state.email}
                onChange={changeHandler}
                name='email'
                required
              ></input>
            </div>
            <div className='form-group'>
              <textarea
                className='form-control border-0 rounded-0'
                style={{ color: '#DEF2F1', backgroundColor: '#17252a' }}
                id='message'
                name='message'
                value={state.message}
                onChange={changeHandler}
                placeholder='Please enter your message here*'
                rows='7'
                required
              ></textarea>
            </div>
          </div>
          {state.submitMessage ? (
            <div className='form-group '>
              <div
                className='form-control  border-0 pl-3 rounded-0'
                style={{ background: '#3aafa9', color: '#f7ffff' }}
              >
                Thanks for sending the message and will get back as soon as
                possible.
              </div>
            </div>
          ) : (
            ''
          )}
          <div className='form-group'>
            <Button
              type='submit'
              className='font-bebas pt-2 ml-2 rounded-0'
              variant='dark'
              style={{
                backgroundColor: 'transparent',
                color: '#17252a',
              }}
              onMouseOver={changeBackground}
              onMouseLeave={revertBackground}
            >
              Send Email
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
