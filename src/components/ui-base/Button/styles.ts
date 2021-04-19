import styled from 'styled-components';
import { IButtonProps } from './type';

export const ButtonStyled = styled.button<IButtonProps>`
  display: flex;
  flex-direction: column;
  height: ${props =>
    props.size === 'small'
      ? '2.5rem'
      : props.size === 'large'
      ? '3.5rem'
      : '3rem'};
  width: ${props =>
    props.size === 'small'
      ? '6.5rem'
      : props.size === 'large'
      ? '14.5rem'
      : '11.25rem'};
  font-size: ${props => (props.size === 'small' ? '0.875rem' : '1rem')};
  border-radius: 0.25rem;
  color: ${props =>
    props.mode === 'dark'
      ? props.theme.colors.extraLight
      : props.theme.colors.lightBlue};
  background: ${props =>
    props.mode === 'dark'
      ? props.theme.colors.lightBlue
      : props.theme.gradients.lightGray};
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  border: none;
  font-weight: bold;
  cursor: pointer;

  :disabled:hover,
  :disabled {
    background-color: rgba(148, 149, 185, 0.4);
    color: white;
  }

  :hover:active {
    background-color: ${props => props.theme.colors.darkBlue};
  }

  :hover {
    background-color: ${props => props.theme.colors.extraLightBlue};
    color: ${props =>
      props.mode === 'dark'
        ? props.theme.colors.extraLight
        : props.theme.colors.extraLight};
  }

  input.error {
    box-shadow: 0 0 0 0.1rem ${props => props.theme.colors.red};
  }
`;
