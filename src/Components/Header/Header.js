import React from 'react';
import Dylan from '../../images/dylan.jpg';
import {Link} from 'react-router-dom';

export const Header = () => {
  return(
    <header className='Header-div'>
      <div>
        <img src={Dylan} alt='Dylan'/>
      </div>
      <div className='Header-div-info'>
        <Link to='/' className='Header-Link'>
          <h1>Dylan Hofmann</h1>
          <h2>Front End Software Developer</h2>
        </Link>
      </div>
      <div className='Header-div-contact'>
        <Link to='/contactme'>
          <button>
            Contact Me
          </button>
        </Link>
      </div>
    </header>
  )
}

