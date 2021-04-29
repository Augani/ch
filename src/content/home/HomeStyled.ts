/* eslint-disable prettier/prettier */
import styled from 'styled-components';

const HomeStyled = styled.div`

  .container {
    width: ${props => props.theme.sizes.container()};
    margin: 0 auto;

    ${({ theme }) =>
      theme.mediaQueries.down('lg')(`
      width: ${theme.sizes.container('lg')};
    `)}

    ${({ theme }) =>
      theme.mediaQueries.down('sm')(`
      width: ${theme.sizes.container('sm')};
    `)}

    ${({ theme }) =>
      theme.mediaQueries.down('xs')(`
      width: ${theme.sizes.container('xs')};
    `)}
  }

  .hero-section {
    min-height: 45rem;
    background-color: ${props => props.theme.colors.darkerBlue};
    background-image: url('/assets/images/slider.png');
    background-position: right;
    background-repeat: no-repeat;
    margin-top: -4.6875rem;
    postion: relative;
    display: flex;
    align-items: center;
    overflow-x: hidden;

    &::after {
      content: '';
      position: absolute;
      bottom: 8rem;
      z-index: -1;
      right: -5%;
      height: 7.5rem;
      background: ${props => props.theme.colors.darkerBlue};
      -webkit-clip-path: ellipse(50% 40% at 49% 56%);
      clip-path: ellipse(50% 40% at 49% 56%);
    }

    h2 {
      color: ${props => props.theme.colors.white};
      position: relative;
      margin-left: 9.37rem;
      text-align: left;
      font-size: ${props => props.theme.typography.pxToRem(40)};
      font-family: ${props =>
        props.theme.typography.config.fontFamilyRobotoSlab};
      ${props => props.theme.mixins.styledStroke}

      &::before {
        content: '';
        padding-left: 0;
      }

      &::after {
        content: '';
        height: 0.188rem;
        width: 4.563rem;
        position: absolute;
        top: 2.188rem;
        left: -5.5rem;
        background-clip: border-box;
        background-image: ${props => props.theme.gradients.lightHorizontal};
      }
    }

    h5 {
      font-size: 1.375rem;
      font-weight: 600;
      margin-left: 9.37rem;
      background: ${props => props.theme.gradients.lightVertical};
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      opacity: 0.4;
    }
  }

  .main-charts-container {
    width: 100%;
    margin-top: -4rem;
  }

  .main-charts {
    display: flex;
    flex-direction: row;
    position: absolute;
    justify-content: space-evenly;


    .main-charts-item {
      width: 14rem;
      margin-right: 1rem;
      height: 8.75rem;
      display: flex;
      flex-direction: column;
      background: ${props => props.theme.colors.darkerBlue};
      border-radius: 0.3rem;
      -webkit-box-shadow: 10px 10px 19px -12px rgba(0, 0, 0, 0.44);
      -moz-box-shadow: 10px 10px 19px -12px rgba(0, 0, 0, 0.44);
      box-shadow: 10px 10px 19px -12px rgba(0, 0, 0, 0.44);
    }

    .main-charts-name {
      color: ${props => props.theme.colors.white};
      font-size: 0.938rem;
      font-weight: 700;
    }

    .main-charts-figure {
      color: ${props => props.theme.colors.white};
      font-size: 1.25rem;
      padding-left: 1rem;
    }

    .main-charts-rate {
      color: ${props => props.theme.colors.green};
      font-size: 0.938rem;
      font-weight: 700;
    }
    .main-charts-rate.charts-neg {
      color: ${props => props.theme.colors.red};
    }


    .main-charts-volume {
      padding-left: 1rem;
      color: ${props => props.theme.colors.white};
      font-size: 0.75rem;
    }

    .main-charts-title {
      display: flex;
      flex-direction: row;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-top: 1rem;
      justify-content: space-between;
    }
  }


.main-services {
  width: 100%;
  padding-top: 10.063rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('/assets/images/polygonfour.png');
  background-repeat: no-repeat;
  background-position: -4rem 30rem;
  margin-bottom: 4.125rem;

  .main-services-container {
    width: 70%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .main-services-figures {
    width: 95%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 4fr;
    grid-template-areas: '. .';
  }

  .main-services-title {
    font-size: 2.5rem;
    color: ${props => props.theme.colors.darkerBlue};
    font-weight: bold;
    position: relative;
    line-height: 3.063rem;
    text-align: left;
    font-family: ${props => props.theme.typography.config.fontFamilyRobotoSlab};
    ${props => props.theme.mixins.styledStroke}
  }

  .main-services-figures {
    width: 100%;
    max-width: 100%;
    flex-direction: column;
    display: flex;
  }

  .main-services-tile {
    max-width: 100%;
    display: grid;
    position: relative;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: '. .';
    place-items: center;
    min-height: 17rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .main-services-tile:first-of-type {
    padding-bottom: 2.313rem;
  }

  .main-services-figures-title {
    color: ${props => props.theme.colors.darkerBlue};
    position: relative;
    font-weight: 600;
    font-size: 2.25rem;
    text-align: left;
    margin: 0;
    margin-bottom: 1rem;
    line-height: 3.064rem;
  }

  .main-services-tile:first-of-type::before {
    content: '';
    width: 0.15rem;
    background: rgba(116, 187, 252, 1);
    height: 60%;
    bottom: 0;
    left: 0;
    position: absolute;
  }

  .main-services-tile:nth-of-type(2) {
    border-right: rgba(116, 187, 252, 0.6) solid 0.2rem;
    border-bottom: rgba(116, 187, 252, 0.5) solid 0.2rem;
    border-top: rgba(116, 187, 252, 0.7) solid 0.2rem;
  }

  .main-services-tile:nth-of-type(3) {
    border-left: rgba(116, 187, 252, 0.4) solid 0.2rem;
    border-bottom: rgba(116, 187, 252, 0.3) solid 0.2rem;
  }

  .main-services-figures-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 17rem;
  }

  .main-services-figures-sub {
    font-size: 1.125rem;
    max-width: 20.125rem;
    font-weight: 400;
    text-align: left;
    line-height: 1.5rem;
    margin: 0;
    color: ${props => props.theme.colors.purple};

  }

  .main-services-tile:nth-of-type(3) > .main-services-figures-title {
    width: 20.125rem;
  }

  .main-services-tile:nth-of-type(4) > .main-services-figures-title {
    width: 18.938rem;
  }

  .main-services-figures-subtitle {
    color: ${props => props.theme.colors.purple};
    font-weight: 100;
    text-align: left;
  }

  .main-services-tile:nth-of-type(3) {
    background: var(--linear-back-five);
  }

  .main-services-tile:nth-of-type(3) {
     background: linear-gradient(92.63deg, rgba(206, 242, 255, 0.5) -0.56%, rgba(208, 227, 255, 0) 76.39%);

  }
  .main-services-tile:nth-of-type(2) {
    background: linear-gradient(-138deg,rgba(206, 242, 255, 0.5) 9.61%,rgba(208,227,255,0) 45.96% );
  }

  .main-services-tile:nth-of-type(4) {
    background: linear-gradient(50.45deg, rgba(151, 204, 252, 0) 60%, rgba(116, 187, 252, 1) 280.42%);
  }

  .main-services-figures-image {
    width: 28.813rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 0.1rem;
    align-items: center;
    justify-content: center;
  }

  .main-services-tile:first-of-type .main-services-figures-item {
    width: 100%;
    max-height: 22.25rem;
  }

  .main-services-figures-item {
    width: 70%;
  }

  .main-services-figures-form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 22.25rem;
    align-items: center;
    border-radius: 0.25rem;
    justify-content: center;
    background: linear-gradient(0deg, rgba(151, 228, 252, 0) 0%, rgba(146, 246, 252, 0.3048) 30.25%, rgba(132, 223, 252, 0.6855) 68.04%, #74A2FC 99.26%);
  }

  .f-form-formgroup {
    margin-bottom: 2rem;
    background: transparent;
  }

  .f-form-label {
    font-size: 1rem;
    margin-bottom: 0.25rem;
    opacity: 0.4;
    line-height: 1.5rem;
    color: ${props => props.theme.colors.darkBlue};
    opacity: 0.3;
  }

  .f-form-formgroup-outer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 3rem;
    width: 19.688rem;
    border-radius: 0.25rem;
    background-color: white;

  }

  .f-form-input {
    font-size: 1rem;
    padding-left: 1.313em;
    padding-right: 0.2em;
    background: transparent;
    line-height: 1.5rem;
    color: ${props => props.theme.colors.darkBlue};
  }



  .f-form-input:nth-of-type(1) {
    height: 100%;
    width: 65%;
    border: none;
    opacity: 0.4;
  }

  .f-form-input:nth-of-type(2) {
    height: 100%;
    width: 35%;
    border: none;
    line-height: 1.5rem;
    text-transform: uppercase;
    color: #001DC6;
  }

  .f-form-line {
    width: 0;
    height: 1.5rem;
    border: 0.063rem solid #DADAFF;
  }

  .f-form-submit {
    font-family: Open Sans;
    font-weight: 600;
    font-style: normal;
    font-size: 1.125rem;
    height: 3.5rem;
    width: 14.5rem;
    outline: none;
    border: none;
    text-transform: uppercase;
    background: ${props => props.theme.colors.lightBlue};
    box-shadow: 0px 4px 16px rgba(78, 81, 255, 0.32);
    letter-spacing: 0.05em;
    border-radius: 0.25rem;
    line-height: 2.125rem;
    color: ${props => props.theme.colors.white};
  }
}

.competitive-cover {
  background-image: url('/assets/images/polygonsix.png');
  background-position: 98% 1.5rem;
  background-repeat: no-repeat;
  padding-top: 2.938rem;
}

.competitive-advantage-section {
  background-color: ${props => props.theme.colors.darkerBlue};
  background-image: url('/assets/images/polygonsix.png');
  background-position: 98% -3.3125rem;
  background-repeat: no-repeat;
  margin-top: 1.875rem;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}

.competitive-advantage-section h3 {
  color: ${props => props.theme.colors.white};
  font-size: 2.25rem;
  font-family: ${props => props.theme.typography.config.fontFamilyRobotoSlab};
  ${props => props.theme.mixins.styledStroke}
}

.competitive-advantages {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 1rem 0 3rem;
}

.competitive-advantage-item {
  width: 17.5rem;
  text-align: center;
  .competitive-icon {
    display: inline-block;
  }
  h5 {
    text-transform: capitalize;
    font-family: ${props => props.theme.typography.config.fontFamilyOpenSans};
    color: ${props => props.theme.colors.white};
    font-weight: 600;
    font-size: 1.5rem;
    margin-top: 1.25rem;
  }
  p {
    font-family: ${props => props.theme.typography.config.fontFamilyOpenSans};
    font-size: 1rem;
    color: ${props => props.theme.colors.white};
    line-height: normal;
    white-space: unset;
    margin-top: 1.125rem;
    margin-bottom: 0;
  }
}

.our-team-section {
  background-color: ${props => props.theme.colors.darkGray};
  padding-top: 2.5rem;
  padding-bottom: 5rem;

  h3 {
    margin: 0;
    font-size: 3.3125rem;
    font-family: ${props => props.theme.typography.config.fontFamilyRobotoSlab};
    color: ${props => props.theme.colors.darkBlue};

    ${props => props.theme.mixins.styledStroke};
    ::after {
      top: 2.1875rem;
    }
  }

  h5 {
    font-family: ${props => props.theme.typography.config.fontFamilyOpenSans};
    padding-left: 6.25rem;
    font-size: 1.5rem;
  }
}

.team-member-list {
  padding: 0 5rem;
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.team-member {
  display: flex;
  justify-content: center;
  align-items: center;

  &.direction-vertical {
    width: 13rem;
    flex-direction: column;
    padding: 2rem;

    .member-details {
      h6 {
        padding-bottom: 0.3125rem;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      span.subtitle {
        min-height: 3.125rem;
      }
    }
  }

  &.direction-horizontal {
    flex-direction: row;
    padding: 2rem;
    width: 20rem;

    .member-avatar {
      width: 6.25rem;
      height: 6.25rem;
      margin-right: 1.5625rem;
      margin-bottom: 0;
    }

    .member-details {
      text-align: left;
      h6 {
        padding-bottom: 0;
      }
      p {
        padding-top: 0.5rem;
      }
    }
  }

  .member-avatar {
    width: 8.125rem;
    height: 8.125rem;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    margin-bottom: 1.5625rem;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 50%;

    .social-profile {
      position: absolute;
      bottom: 0;
      right: 0;
      background-color: ${props => props.theme.colors.white};
      border-radius: 50%;
    }
  }

  .member-details {
    text-align: center;
    h6 {
      font-size: 1rem;
      font-family: ${props => props.theme.typography.config.fontFamilyOpenSans};
      margin: 0;
      padding-bottom: 0.3125rem;
      text-transform: capitalize;
      font-weight: ${props => props.theme.typography.config.fontWeightSemiBold};
    }
    span.subtitle {
      font-family: ${props => props.theme.typography.config.fontFamilyOpenSans};
      text-transform: capitalize;
      letter-spacing: 0.5px;
      display: block;
    }
    p {
      font-size: 0.8125rem;
      margin: 0;
      text-transform: capitalize;
      color: ${props => props.theme.colors.darkBlue};
      padding-top: 1rem;
    }
  }
}

  .roadmap-section {
    padding: 1.875rem 0;
    min-height: 46.625rem;
    display: flex;
    justify-content: center;
    background: linear-gradient(-138deg,#cedcff 9.61%,rgba(208,227,255,0) 45.96% );

    h2{
      ${props => props.theme.mixins.styledStroke}

      font-weight: ${props => props.theme.typography.config.fontWeightBold};
      line-height: 3.75rem;
      letter-spacing: -0.5px;
      font-size: 2.5rem;
      font-family: ${props => props.theme.typography.config.fontFamilyOpenSans};
      color: ${props => props.theme.colors.darkBlue};
      padding-bottom: 2.75rem;
    }

    .roadmap-details{
      min-height: 29.9375rem;
      width: calc(100% - 11.0625rem);
      margin: 0 auto;
      background-image: url(/assets/images/road.png);
      background-position: top left;
      background-repeat: no-repeat;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;

      .roadmap-item{
        flex: 1;
        min-width: 12.875rem;
        margin-left: 0.375rem;
        min-width: 206px;
        display: flex;
        flex-direction: column;

        &:nth-child(even){
          justify-content: flex-end;
        }

        .roadmap-content{
          padding-left: 1.375rem;
          margin-top: -0.9375rem;

          h4{
            ${props => props.theme.jsToCss(props.theme.typography.variant.h4)};
            margin: 0;
            text-transform: capitalize;
            letter-spacing: -0.6px;
          }
          h6{
            ${props => props.theme.jsToCss(props.theme.typography.variant.h6)};
            letter-spacing: 0.25px;
            margin: 0;
            text-transform: capitalize;
          }
          p{
            ${props =>
              props.theme.jsToCss(props.theme.typography.variant.body1)};
          }
        }
      }
    }
  }
}
`;

export default HomeStyled;
