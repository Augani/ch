import React, { FunctionComponent, useState } from 'react';
import { HeaderStyled } from './HeaderStyled';
import Link from 'next/link';
import ActiveLink from '@utils-components/ActiveLink/ActiveLink';
import Modal from '@ui-base/Modal';
import Subscribe from '../SubscriberForm/Subscribe';
import Contact from '../../../../functional/ContactForm/Contact';

const Header: FunctionComponent = () => {
  const [openSubscriberForm, setOpenSubscriberForm] = useState(false);
  const [openContactUsForm, setOpenContactUsForm] = useState(false);

  return (
    <HeaderStyled id='header' className='header light'>
      <div className='container'>
        <div className='logo'>
          <Link href='/'>
            <a>
              <img src='/assets/logos/light.png' alt='Coinhaven Logo' />
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
            <ActiveLink activeClassName='active' href='#contactus'>
              <a
                className='nav-link'
                onClick={() => setOpenContactUsForm(true)}
              >
                contact us
              </a>
            </ActiveLink>
            <ActiveLink activeClassName='active' href='#subscribe'>
              <a
                className='nav-link'
                onClick={() => setOpenSubscriberForm(true)}
              >
                Subscribe
              </a>
            </ActiveLink>
          </nav>
        </div>
      </div>
      {/**
       * Subscriber form modal
       */}
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
    </HeaderStyled>
  );
};

export default Header;
