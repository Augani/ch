import { ReactSVG } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 12.5rem;
  align-items: center;
  background-position: 90% 45%;
  background-image: url('/assets/images/authBack.png');
  background-repeat: no-repeat;
  background-size: 40%;

  .signup-btn {
    position: absolute;
    top: 2rem;
    z-index: 100;
    right: 2.5rem;
  }

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
    top: 0;
    height: 100%;
    z-index: -1;
    background: ${props => props.theme.gradients.lightDiagonal};
    opacity: 0.8;
    transform: matrix(1, 0, 0, -1, 0, 0);
  }

  main {
    width: ${props => props.theme.sizes.container()};
    display: flex;
    flex-direction: column;

    .form-holder {
      max-width: 28rem;
    }

    .title {
      font-size: 2.875rem;
      line-height: 4rem;
      font-weight: 600;
      margin-bottom: 2rem;
      color: ${props => props.theme.colors.darkBlue};
    }

    .sub-title {
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.5rem;
      margin-bottom: 3rem;
    }

    .forgot-password-form {
      width: 100%;
      margin-top: 2rem;

      input {
        width: 100%;
        margin-bottom: 2.5rem;
      }

      input::placeholder {
        color: ${props => props.theme.colors.darkBlue};
        opacity: 0.4;
      }

      button {
        height: 3.5rem;
        width: 14.5rem;
        float: right;
      }
    }
  }
`;
