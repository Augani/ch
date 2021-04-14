import React, { FunctionComponent } from 'react';
import { HeaderStyled } from './HeaderStyled';
import Link from 'next/link';

const Header: FunctionComponent = () => {
  return (
    <HeaderStyled className='header light'>
      <div className='container'>
        <div className='logo'>
          <Link href='/'>
            <a>
              <img src='/assets/logos/dark.png' alt='Coinhaven Logo' />
            </a>
          </Link>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
