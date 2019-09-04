import React from 'react';

export const ContactMe = () => {
  return (
    <div>
      <h2>Contact Me!</h2>
      <form action='https://formspree.io/dylan.hofmann@gmail.com' method='POST'>
        <label>Name</label>
        <input type='text' name='name'/>
        <label>Email</label>
        <input type='email' name='_replyto'/>
        <label>What do you want to tell me?</label>
        <input type='text-field' name='message'/>
        <input type='submit' value='Send'/>
      </form>
    </div>
    )
}