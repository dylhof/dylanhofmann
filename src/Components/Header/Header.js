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
        <h1>Dylan Hofmann</h1>
        <h2>Front End Software Developer</h2>
        <p>dylan.hofmann@gmail.com</p>
      </div>
      <div>
        <Link to='/contactme'>
          <button>
            contact Dylan
          </button>
        </Link>
      </div>
    </header>
  )
}

