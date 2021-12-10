import React from 'react';
import emailjs from 'emailjs-com';

  function ContactUs(){

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmaill', 'test_1', e.target, 'user_InK9XcrIlzflx6b0udFgl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <form onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Sujeto</label>
      <input type= "text" name = "subject" />
      <label>Message</label>
      <textarea name="message" />
      <button type='submit'>Send</button>
    </form>
  );
};

export default ContactUs;