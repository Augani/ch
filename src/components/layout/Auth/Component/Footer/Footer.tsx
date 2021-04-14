import React, { FunctionComponent } from 'react';
import { FooterStyled, Copyright } from './FooterStyled';

const Header: FunctionComponent = () => {
  return (
    <FooterStyled className='footer'>
      <footer className='footer'>
        <Copyright>
          Ⓒ {new Date().getFullYear()} coinhaven.com All rights reserved
        </Copyright>
      </footer>
    </FooterStyled>
  );
};

export default Header;
