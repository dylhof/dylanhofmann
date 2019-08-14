import React from 'react';
import Dylan from '../../images/dylan.jpg';

export const Header = () => {
  return(
    <header className='Header-div'>
      <div>
        <img src={Dylan} alt='Dylan'/>
      </div>
      <div className='Header-div-info'>
        <h1>Dylan Hofmann</h1>
        <h2>Front End Software Developer</h2>
        <p>dylan.hofmann@gmail.com</p>
      </div>
    </header>
  )
}

