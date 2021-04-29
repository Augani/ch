import styled from 'styled-components';
import { ITabBarProps } from './type';

export const TabBarStyled = styled.div<ITabBarProps>`
  display: flex;
  flex-direction: row;
  position: relative;
  height: ${props => (props.size === 'small' ? '2.5rem' : '3rem')};
  width: ${props => (props.size === 'small' ? '15rem' : '30rem')};
  font-size: ${props => (props.size === 'small' ? '0.875rem' : '1rem')};
  border-radius: 0.25rem;
  color: ${props => props.theme.colors.purple};
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-even;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 0 0 0.1rem ${props => props.theme.colors.purple};

  .holder {
    position: relative;
    width: 50%;
    height: 100%;
    display: flex;

    hr {
      position: absolute;
      width: 0.125;
      height: 2rem;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      background: #d1d6f5;
      border-radius: 0.063rem;
    }
  }

  button.active {
    background: ${props => props.theme.colors.purple};
    color: white;
  }

  .divider {
    height: 90%;
    width: 0.1rem;
    position: absolute;
    left: 50%;
  }

  button:hover:active {
    background-color: ${props => props.theme.colors.purple};
    color: white;
  }

  button {
    background: transparent;
    font-size: 1rem;
    height: 100%;
    width: 100%;
    z-index: 10;
    border: none;
    cursor: pointer;
    color: ${props => props.theme.colors.purple};
  }
`;
