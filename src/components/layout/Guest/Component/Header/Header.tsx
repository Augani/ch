import React, { FunctionComponent, useState } from 'react';
import { HeaderStyled } from './HeaderStyled';
import Link from 'next/link';
import ActiveLink from '@utils-components/ActiveLink/ActiveLink';
import Modal from '@ui-base/Modal';
import Subscribe from '@components/SubscriberForm/Subscribe';
import Contact from '@components/ContactForm/Contact';
import { CSSTransition } from 'react-transition-group';

const Header: FunctionComponent = () => {
  const [openSubscriberForm, setOpenSubscriberForm] = useState(false);
  const [openContactUsForm, setOpenContactUsForm] = useState(false);

  const [openMobileMenu, setOpenMobileMenu] = useState(false);

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
        {/* Desktop Menu */}
        <div className='menu menu-desktop'>
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
                Sign Up
              </a>
            </ActiveLink>
          </nav>
        </div>
        {/* Mobile Menu */}
        <div className='menu menu-mobile'>
          <button onClick={() => setOpenMobileMenu(!openMobileMenu)}>
            <img
              src={
                openMobileMenu
                  ? 'assets/icons/close-white.svg'
                  : 'assets/icons/menu.svg'
              }
            />
          </button>
          <CSSTransition
            in={openMobileMenu}
            classNames='transition'
            timeout={300}
            unmountOnExit
          >
            <>
              <div className='menu-mobile-items'>
                <nav>
                  <ActiveLink activeClassName='active' href='/about-us#team'>
                    <a
                      className='nav-link'
                      onClick={() => setOpenMobileMenu(false)}
                    >
                      team
                    </a>
                  </ActiveLink>
                  <ActiveLink activeClassName='active' href='/about-us'>
                    <a
                      className='nav-link'
                      onClick={() => setOpenMobileMenu(false)}
                    >
                      about us
                    </a>
                  </ActiveLink>
                  <ActiveLink activeClassName='active' href='#contactus'>
                    <a
                      className='nav-link'
                      onClick={() => {
                        setOpenMobileMenu(false);
                        setOpenContactUsForm(true);
                      }}
                    >
                      contact us
                    </a>
                  </ActiveLink>
                </nav>
                <div className='last-menu-item'>
                  <ActiveLink activeClassName='active' href='#subscribe'>
                    <a
                      className='nav-link'
                      onClick={() => {
                        setOpenMobileMenu(false);
                        setOpenSubscriberForm(true);
                      }}
                    >
                      Sign Up
                    </a>
                  </ActiveLink>
                </div>
              </div>
              <div
                className='menu-mobile-backdrop'
                onClick={() => setOpenMobileMenu(false)}
              />
            </>
          </CSSTransition>
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
