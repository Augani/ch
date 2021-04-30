import React, { FunctionComponent, useState } from 'react';
import { FooterStyled, CountryFlag, Copyright } from './FooterStyled';
import SocialIcon from '@styles/helper/SocialIcon';

import Link from 'next/link';
import ActiveLink from '@utils-components/ActiveLink/ActiveLink';
import ScrollTop from '../ScrollTop';
import Modal from '@ui-base/Modal';
import Subscribe from '@components/SubscriberForm/Subscribe';
import Contact from '@components/ContactForm/Contact';

const Header: FunctionComponent = () => {
  const [openSubscriberForm, setOpenSubscriberForm] = useState(false);
  const [openContactUsForm, setOpenContactUsForm] = useState(false);
  return (
    <FooterStyled className='footer'>
      <ScrollTop />

      <div className='container'>
        <div className='footer-left-panel'>
          <div className='location-change'>
            <div className='country'>
              <CountryFlag className='country-flag germany-flag' /> Germany
            </div>
          </div>
          <div className='navigation'>
            <nav>
              <ActiveLink href='/about-us#team' activeClassName='active'>
                <a className='footer-link'>team</a>
              </ActiveLink>
              <ActiveLink href='/about-us' activeClassName='active'>
                <a className='footer-link'>about us</a>
              </ActiveLink>
              <ActiveLink activeClassName='active' href='#contactus'>
                <a
                  onClick={() => setOpenContactUsForm(true)}
                  className='footer-link'
                >
                  contact us
                </a>
              </ActiveLink>
            </nav>
          </div>
        </div>
        <div className='footer-right-panel'>
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
      </div>
      <Copyright>
        Ⓒ {new Date().getFullYear()} coinhaven.com All rights reserved
      </Copyright>

      <Modal
        isOpen={openSubscriberForm}
        onClose={() => setOpenSubscriberForm(false)}
      >
        <Subscribe />
      </Modal>
      {/**
       * Contact Us form modal
       */}
      <Modal
        isOpen={openContactUsForm}
        onClose={() => setOpenContactUsForm(false)}
      >
        <Contact />
      </Modal>
    </FooterStyled>
  );
};

export default Header;
