import styled from 'styled-components';

export const FooterStyled = styled.footer`
  background-color: ${props => props.theme.colors.darkerBlue};
  padding-top: 3.875rem;

  .container {
    width: ${props => props.theme.sizes.container()};
    margin: 0 auto;
    padding-bottom: 3.875rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  nav {
    a {
      color: ${props => props.theme.colors.white};
      opacity: 0.7;
      font-weight: ${props => props.theme.typography.config.fontWeightMedium};
      font-size: 0.9375rem;
      font-family: ${props => props.theme.typography.config.fontFamilyOpenSans};
      display: inline-block;
      margin: 0 1.25rem;
      text-transform: capitalize;
      &:hover,
      &.active {
        text-shadow: 0 3px 9px rgba(38, 226, 156, 0.2);
        color: ${props => props.theme.colors.lightBlue};
        opacity: 1;
      }
    }
  }

  .social-account {
    width: 16.875rem;
    .social-link {
      display: flex;
      justify-content: space-between;
      a i {
        background-color: rgba(255, 255, 255, 0.4);
      }
    }
    .logo {
      width: 9.5rem;
      padding-bottom: 1.5625rem;
      a {
        display: block;
      }
    }
  }

  .location-change {
    width: 9.375rem;
    .country {
      color: rgba(255, 255, 255, 0.7);
      display: flex;
      i {
        margin-right: 0.625rem;
      }
    }
  }
`;

/**
 * This CountryFlag icon styling is a temporary.
 * It should be a component under "components/ui-base/" and can be useable to everywhere on website.
 */
export const CountryFlag = styled.i`
  display: block;
  width: 1.5625rem;
  height: 1.25rem;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &.india-flag {
    background-image: url('/assets/flags/India-flag.png');
  }

  &.germany-flag {
    background-image: url('/assets/flags/Germany-flag.png');
  }
`;

export const Copyright = styled.div`
  background-color: ${props => props.theme.colors.extraDark};
  text-align: center;
  font-size: 0.875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  height: 2.5rem;
  line-height: 2.5rem;
`;