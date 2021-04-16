import React, { FunctionComponent } from 'react';
import { FooterStyled, CountryFlag, Copyright } from './FooterStyled';
import SocialIcon from '@styles/helper/SocialIcon';

import Link from 'next/link';
import ActiveLink from '@utils-components/ActiveLink/ActiveLink';
import ScrollTop from '../ScrollTop';

const Header: FunctionComponent = () => {
  return (
    <FooterStyled className='footer'>
      <ScrollTop />
      <footer className='footer'>
        <div className='container'>
          <div className='location-change'>
            <div className='country'>
              <CountryFlag className='country-flag india-flag'></CountryFlag>{' '}
              India
            </div>
          </div>
          <div className='navigation'>
            <nav>
              <ActiveLink href='/team' activeClassName='active'>
                <a className='footer-link'>team</a>
              </ActiveLink>
              <ActiveLink href='/about-us' activeClassName='active'>
                <a className='footer-link'>about us</a>
              </ActiveLink>
              <ActiveLink href='/contact-us' activeClassName='active'>
                <a className='footer-link'>contact us</a>
              </ActiveLink>
            </nav>
          </div>
          <div className='social-account'>
            <div className='logo'>
              <Link href='/'>
                <a>
                  <img src='/assets/logos/light.png' alt='Coinhaven Logo' />
                </a>
              </Link>
            </div>
            <div className='social-link'>
              <a
                href='https://www.instagram.com/coin.haven/'
                target='_blank'
                rel='noreferrer'
              >
                <SocialIcon className='fab fa-instagram icon-style instagram-icon'></SocialIcon>
              </a>
              <a
                href='https://www.linkedin.com/company/coinhaven'
                target='_blank'
                rel='noreferrer'
              >
                <SocialIcon className='fab fa-linkedin-in icon-style linkedin-icon'></SocialIcon>
              </a>
              <a
                href='https://www.facebook.com/coinhaven.cryptocurrency/'
                target='_blank'
                rel='noreferrer'
              >
                <SocialIcon className='fab fa-facebook-f icon-style facebook-icon'></SocialIcon>
              </a>
              <a
                href='https://twitter.com/coinhaven'
                target='_blank'
                rel='noreferrer'
              >
                <SocialIcon className='fab fa-twitter icon-style twitter-icon'></SocialIcon>
              </a>
              <a
                href='https://www.reddit.com/user/coinhaven_crypto'
                target='_blank'
                rel='noreferrer'
              >
                <SocialIcon className='fab fa-reddit-alien icon-style reddit-icon'></SocialIcon>
              </a>
              <a
                href='https://www.youtube.com/channel/UCTQwlKm-Xt7EZFmk--jAHDQ/about'
                target='_blank'
                rel='noreferrer'
              >
                <SocialIcon className='fab fa-youtube icon-style youtube-icon'></SocialIcon>
              </a>
              <a
                href='https://medium.com/@coinhavensocial'
                target='_blank'
                rel='noreferrer'
              >
                <SocialIcon className='fab fa-medium-m icon-style medium-icon'></SocialIcon>
              </a>
            </div>
          </div>
        </div>
        <Copyright>
          Ⓒ {new Date().getFullYear()} coinhaven.com All rights reserved
        </Copyright>
      </footer>
    </FooterStyled>
  );
};

export default Header;
