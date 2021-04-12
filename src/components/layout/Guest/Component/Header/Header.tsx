import React, { FunctionComponent } from 'react';
import { HeaderStyled } from './HeaderStyled';
import Link from 'next/link';
import ActiveLink from '@utils/ActiveLink';

const Header: FunctionComponent = () => {
  return (
    <HeaderStyled className='header light'>
      <div className='container'>
        <div className='logo'>
          <Link href='/'>
            <a>
              <img src='/assets/logos/bright.png' alt='Coinhaven Logo' />
            </a>
          </Link>
        </div>
        <div className='menu'>
          <nav>
            <ActiveLink activeClassName='active' href='/about-us#team'>
              <a className='nav-link'>team</a>
            </ActiveLink>
            <ActiveLink activeClassName='active' href='/about-us'>
              <a className='nav-link'>about us</a>
            </ActiveLink>
          </nav>
          <nav>
            <ActiveLink activeClassName='active' href='/contact-us'>
              <a className='nav-link'>contact us</a>
            </ActiveLink>
            <ActiveLink activeClassName='active' href='/signup'>
              <a className='nav-link'>sign up</a>
            </ActiveLink>
          </nav>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
