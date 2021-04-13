import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import GuestLayout from '@layout/Guest/GuestLayout';
import HomeStyled from '@styles/pages/HomeStyled';
import { isUndefined } from 'lodash';
import TeamData from '../data/team.json';
import SocialIcon from '@styles/helper/SocialIcon';

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
        {/* Charts Section */}
        <section className='main-charts'>
          <div className='main-charts-item'>
            <div className='main-charts-title'>
              <p className='main-charts-name'>BTC/USDT</p>
              <p className='main-charts-rate'>+0.73%</p>
            </div>
            <div className='main-charts-figure'>9441.38</div>
            <div className='main-charts-volume'>Volume: 28864.479901</div>
            <div className='main-charts-plot'>
              <div className='my_dataviz'></div>
            </div>
          </div>
          <div className='main-charts-item'>
            <div className='main-charts-title'>
              <p className='main-charts-name'>ETH/USDT</p>
              <p className='main-charts-rate'>+2.17%</p>
            </div>
            <div className='main-charts-figure'>235.57</div>
            <div className='main-charts-volume'>Volume: 325784.5351</div>
            <div className='main-charts-plot'></div>
          </div>
          <div className='main-charts-item'>
            <div className='main-charts-title'>
              <p className='main-charts-name'>LTC/USDT</p>
              <p className='main-charts-rate'>+0.59%</p>
            </div>
            <div className='main-charts-figure'>43.62</div>
            <div className='main-charts-volume'>Volume: 1161419.5017</div>
            <div className='main-charts-plot'></div>
          </div>
          <div className='main-charts-item'>
            <div className='main-charts-title'>
              <p className='main-charts-name'>ADA/USDT</p>
              <p className='main-charts-rate charts-neg'>-0.44%</p>
            </div>
            <div className='main-charts-figure'>0.7179</div>
            <div className='main-charts-volume'>Volume: 2568842.90</div>
            <div className='main-charts-plot'></div>
          </div>
          <div className='main-charts-item'>
            <div className='main-charts-title'>
              <p className='main-charts-name'>XRP/USDT</p>
              <p className='main-charts-rate'>+0.75%</p>
            </div>
            <div className='main-charts-figure'>2.5547</div>
            <div className='main-charts-volume'>Volume: 12848408.5133</div>
            <div className='main-charts-plot'></div>
          </div>
        </section>

        {/* Services section */}

        <section className='main-services'>
          <div className='main-services-container'>
            <h1 className='main-services-title'>Services</h1>
            <div className='main-services-figures'>
              <div className='main-services-tile'>
                <h3 className='main-services-figures-title'>Crypto exchange</h3>

                <div className='main-services-figures-image'>
                  <div className='main-services-figures-item'>
                    <form className='main-services-figures-form'>
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
                    </form>
                  </div>
                </div>
              </div>

              <div className='main-services-tile'>
                <div className='main-services-figures-image'>
                  <div className='main-services-figures-item'>
                    <img
                      alt='bank'
                      className=''
                      src='./assets/images/bank.svg'
                    />
                  </div>
                </div>

                <h3 className='main-services-figures-title'>
                  EURO wallet and <br></br> debit card
                </h3>
              </div>

              <div className='main-services-tile'>
                <h1 className='main-services-figures-title'>Wallets</h1>

                <div className='main-services-figures-image'>
                  <div className='main-services-figures-item'>
                    <img
                      alt='bank'
                      className=''
                      src='./assets/images/wallet.svg'
                    />
                  </div>
                </div>
              </div>

              <div className='main-services-tile'>
                <div className='main-services-figures-image'>
                  <div className='main-services-figures-item'>
                    <img
                      alt='bank'
                      className=''
                      src='./assets/images/chart.svg'
                    />
                  </div>
                </div>

                <h1 className='main-services-figures-title'>
                  OTC brokerage <br></br> interface
                </h1>
              </div>
            </div>
          </div>
        </section>
        {/* Competitive advantage section */}
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
      </HomeStyled>
    </GuestLayout>
  );
};

export default Home;
