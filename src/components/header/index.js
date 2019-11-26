import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

export const Header = () => (
  <header className='container-fluid'>
    <nav>
      <Link to='/home' className='link-home h3 font-weight-bold'>
        LearnStart
      </Link>
      <Link to='#' className='link-signup'>
        Sign up
      </Link>
    </nav>
  </header>
);

export default Header;
