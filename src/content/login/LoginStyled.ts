import { ReactSVG } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-position: 90% 45%;
  background-image: url('/assets/images/authBack.png');
  background-repeat: no-repeat;
  background-size: 40%;

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 4rem;

    .logo svg {
      height: 2rem;
    }
  }

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: ${props => props.theme.gradients.lightDiagonal};
    opacity: 0.8;
    transform: matrix(1, 0, 0, -1, 0, 0);
  }

  .main-page {
    width: ${props => props.theme.sizes.container()};
    display: flex;
    flex-direction: column;
    justify-content: center;
    .form-holder {
      max-width: 28rem;
    }

    .title {
      font-size: 2.875rem;
      line-height: 4rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: ${props => props.theme.colors.darkBlue};
    }

    .tab-bar {
      margin-bottom: 1rem;
      width: 100%;
    }

    .sub-title {
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.5rem;
      margin-bottom: 3rem;
    }

    .link {
      color: ${props => props.theme.colors.lightBlue};
      font-weight: 700;
      line-height: 1.5rem;
      margin-left: 0.5rem;
    }
    .link.forgot-password {
      float: right;
      font-weight: 600;
    }

    .login-form {
      width: 100%;
      margin-top: 3.5rem;

      input {
        width: 100%;
        margin-bottom: 2rem;
      }

      div:nth-of-type(2) input {
        margin-bottom: 1rem;
      }

      input::placeholder {
        color: ${props => props.theme.colors.darkBlue};
        opacity: 0.4;
      }

      button {
        margin-top: 2rem;
        height: 3.5rem;
        width: 14.5rem;
        margin-left: auto;
      }
    }
  }
`;
