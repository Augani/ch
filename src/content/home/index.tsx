import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import GuestLayout from '@layout/Guest/GuestLayout';
import HomeStyled from './HomeStyled';
import { isUndefined } from 'lodash';
import TeamData from './data/team.json';
import SocialIcon from '@styles/helper/SocialIcon';
import CryptoData from './data/Crypto.json';
import Card from '@components/ExchangeRateCard';

const Home: FunctionComponent = () => {
  return (
    <GuestLayout>
      <Head>
        <title>Coinhaven</title>
      </Head>
      <HomeStyled>
        {/* Hero Section */}
        <section className='hero-section'>
          <div className='container'>
            <h2>
              A synergy between <br></br> Cryptocurrency Trading,<br></br>{' '}
              Investing and Banking.
            </h2>
            <h5>Coming soon</h5>
          </div>
        </section>
        {/* Charts section */}
        <section className='main-charts-container'>
          <div className='container'>
            <div className='main-charts'>
              {CryptoData.map((h, index) => (
                <Card key={index} cryptoData={h} />
              ))}
            </div>
          </div>
        </section>

        {/* Services section */}

        <section className='main-services'>
          <div className='container'>
            <h1 className='main-services-title'>Services</h1>
            <div className='main-services-figures'>
              <div className='main-services-tile'>
                <div className='main-services-figures-text'>
                  <h3 className='main-services-figures-title'>
                    Crypto exchange
                  </h3>
                  <p className='main-services-figures-sub'>
                    Trade and swap crypto assets with ease.
                  </p>
                </div>

                <div className='main-services-figures-image'>
                  <div className='main-services-figures-item'>
                    {/* <form className='main-services-figures-form'>
                      <div className='f-form-formgroup'>
                        <label htmlFor='' className='f-form-label'>
                          I Have
                        </label>
                        <div className='f-form-formgroup-outer'>
                          <input className='f-form-input' />
                          <hr className='f-form-line' />
                          <input className='f-form-input' />
                        </div>
                      </div>
                      <div className='f-form-formgroup'>
                        <label htmlFor='' className='f-form-label'>
                          I Get
                        </label>
                        <div className='f-form-formgroup-outer'>
                          <input className='f-form-input' />
                          <hr className='f-form-line' />
                          <input className='f-form-input' />
                        </div>
                      </div>
                      <button className='f-form-submit'>Exchange</button>
                    </form> */}
                    <img alt='Exchange' src='/assets/images/exchange.png' />
                  </div>
                </div>
              </div>

              <div className='main-services-tile'>
                <div className='main-services-figures-image'>
                  <div className='main-services-figures-item'>
                    <img alt='Wallet' src='/assets/images/bank.png' />
                  </div>
                </div>

                <div className='main-services-figures-text'>
                  <h3 className='main-services-figures-title'>
                    EURO wallet and <br></br> debit card
                  </h3>
                  <p className='main-services-figures-sub'>
                    Get your personalized IBAN wallet + a Debit card.
                  </p>
                </div>
              </div>

              <div className='main-services-tile'>
                <div className='main-services-figures-text'>
                  <h3 className='main-services-figures-title'>Wallets</h3>
                  <p className='main-services-figures-sub'>
                    Operate your very own Coinhaven FIAT and cryptocurrency
                    wallets.
                  </p>
                </div>

                <div className='main-services-figures-image'>
                  <div className='main-services-figures-item'>
                    <img alt='Wallet' src='/assets/images/gWallet.png' />
                  </div>
                </div>
              </div>

              <div className='main-services-tile'>
                <div className='main-services-figures-image'>
                  <div className='main-services-figures-item'>
                    <img alt='Chart' src='/assets/images/chart.png' />
                  </div>
                </div>

                <div className='main-services-figures-text'>
                  <h3 className='main-services-figures-title'>
                    OTC brokerage <br></br> interface
                  </h3>
                  <p className='main-services-figures-sub'>
                    Buy crypto over-the-counter minus the high brokerage fees.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive advantage section */}
        <div className='competitive-cover'>
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
                    <img
                      src='/assets/icons/liquidity.svg'
                      alt='liquidity icon'
                    />
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
                    Save money with low exchange fees and withdrawal
                    commissions.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* Roadmap section */}
        <section className='roadmap-section'>
          <div className='container'>
            <h2>Roadmap</h2>
            <div className='roadmap-details'>
              <div className='roadmap-item'>
                <div className='roadmap-content'>
                  <h4>june 2021</h4>
                  <h6>launch</h6>
                  <p>Instant Exchange Spot exchange P2P trading Bank Account</p>
                </div>
              </div>
              <div className='roadmap-item'>
                <div className='roadmap-content'>
                  <h4>july 2021</h4>
                  <h6>launch</h6>
                  <p>Regulatory approval for USA and Australia</p>
                </div>
              </div>
              <div className='roadmap-item'>
                <div className='roadmap-content'>
                  <h4>September 2021</h4>
                  <h6>launch</h6>
                  <p>Margin trading Brokerage OTC Debit card</p>
                </div>
              </div>
              <div className='roadmap-item'>
                <div className='roadmap-content'>
                  <h4>December 2021</h4>
                  <h6>launch</h6>
                  <p>P2P Lending Coinhaven Lending</p>
                </div>
              </div>
              <div className='roadmap-item'>
                <div className='roadmap-content'>
                  <h4>March 2022</h4>
                  <h6>launch</h6>
                  <p>Coinhaven Earn. Merchant</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our team section */}
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
      </HomeStyled>
    </GuestLayout>
  );
};

export default Home;
