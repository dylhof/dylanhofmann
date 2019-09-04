import React from 'react';

export const ContactMe = () => {
  return (
    <div className='ContactMe-div'>
      <h2>Contact Me!</h2>
      <form action='https://formspree.io/dylan.hofmann@gmail.com' method='POST' className='ContactMe-form'>
        <label>Name:</label>
        <input type='text' name='name' required/>
        <label>Email:</label>
        <input type='email' name='_replyto' required/>
        <label>What do you want to tell me?</label>
        <textarea type='text-field' name='message' className='ContactMe-input-message' required/>
        <input type='submit' value='Send' className='ContactMe-input-submit'/>
      </form>
    </div>
    )
}