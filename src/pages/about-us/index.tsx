import React, { FunctionComponent } from 'react';
import { AboutUsStyled } from './AboutUsStyled';

import Head from 'next/head';

import GuestLayout from '@layout/Guest/GuestLayout';
import SocialIcon from '@styles/helper/SocialIcon';

import { isUndefined } from 'lodash';
import TeamData from './team.json';

const AboutUs: FunctionComponent = () => {
  return (
    <GuestLayout>
      <Head>
        <title>About Us | Coinhaven</title>
      </Head>
      <AboutUsStyled>
        <section className='hero-section'>
          <div className='container'>
            <h1 className='styled-stroke'>About us</h1>
          </div>
        </section>
        <section className='page-editorial-section'>
          <div className='container'>
            <p>
              <strong>Coinhaven</strong> is an all-in-one trading and exchange
              platform where you can easily buy Bitcoin and other crypto assets
              with U.S. Dollars. You can also exchange your Bitcoin for other
              crypto assets - such as Ethereum - with just a few clicks.
              Coinhaven’s detailed, real-time charts can help you seize
              investment opportunities by giving you a complete picture of the
              price action.
              <strong>
                Cryptocurrency trading can be easy, quick and intuitive.
                Coinhaven is here to prove it.
              </strong>
            </p>
          </div>
        </section>
        <section className='statistics-info-section'>
          <div className='container'>
            <div className='statistics-numbers light-blue-horizontal-gradient'>
              <div className='statistics-numbers-item'>
                <h1>42</h1>
                <p>Countries and Regions</p>
              </div>
              <div className='statistics-numbers-item'>
                <h1>8</h1>
                <p>Payment Method</p>
              </div>
              <div className='statistics-numbers-item'>
                <h1>18</h1>
                <p>Currencies available</p>
              </div>
            </div>
            <div className='statistics-heading'>
              <h2>
                Our mission is to create an open financial market accessible to
                everyone.
              </h2>
            </div>
          </div>
        </section>
        <section className='competitive-advantage-section'>
          <div className='container'>
            <h3 className='styled-stroke'>Competitive advantage</h3>

            <div className='competitive-advantages'>
              <div className='competitive-advantage-item'>
                <div className='competitive-icon'>
                  <img src='/assets/icons/security.svg' alt='security icon' />
                </div>
                <h5>SECURITY</h5>
                <p>
                  Sleep soundly with your assets safely stored in bulletproof
                  cold storage
                </p>
              </div>
              <div className='competitive-advantage-item'>
                <div className='competitive-icon'>
                  <img src='/assets/icons/liquidity.svg' alt='liquidity icon' />
                </div>
                <h5>LIQUIDITY</h5>
                <p>
                  Buy, sell and swap between 9+ cryptocurrencies quickly and
                  easily.
                </p>
              </div>
              <div className='competitive-advantage-item'>
                <div className='competitive-icon'>
                  <img src='/assets/icons/fees.svg' alt='fees icon' />
                </div>
                <h5>LOW FEES</h5>
                <p>
                  Save money with low exchange fees and withdrawal commissions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='our-team-section' id='team'>
          <div className='container'>
            <h3 className='styled-stroke'>Our team</h3>
            <div className='team-member-list'>
              {TeamData?.map((member, index) => {
                return (
                  <div
                    key={`member-${index}`}
                    className='team-member direction-vertical'
                  >
                    <div
                      className='member-avatar'
                      style={{
                        backgroundImage: `url('${member?.image}')`
                      }}
                    >
                      {!isUndefined(member?.linkedIn) && (
                        <a
                          href={member.linkedIn}
                          className='social-profile'
                          target='_blank'
                          rel='noreferrer'
                        >
                          <SocialIcon className='fab fa-linkedin-in icon-style linkedin-icon'></SocialIcon>
                        </a>
                      )}
                    </div>
                    <div className='member-details'>
                      <h6>{member.name}</h6>
                      <span className='subtitle'>{member.position}</span>
                      {!isUndefined(member?.description) && (
                        <p>{member?.description}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            {/*
            <h5>Advisory Board</h5>
            <div className='team-member-list'>
              <div className='team-member direction-horizontal'>
                <div
                  className='member-avatar'
                  style={{
                    backgroundImage: "url('/assets/images/avatars/avatar1.png')"
                  }}
                >
                  <a
                    href='https://www.linkedin.com/company/coinhaven/'
                    className='social-profile'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <SocialIcon className='fab fa-linkedin-in icon-style linkedin-icon'></SocialIcon>
                  </a>
                </div>
                <div className='member-details'>
                  <h6>member name</h6>
                  <span className='subtitle'>position</span>
                  <p>short job description</p>
                </div>
              </div>
            </div>
            */}
          </div>
        </section>
      </AboutUsStyled>
    </GuestLayout>
  );
};

export default AboutUs;
