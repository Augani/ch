import styled from 'styled-components';
import { ITextFieldProps } from './ITextFieldProps';

export const TextFieldStyled = styled.div<ITextFieldProps>`
  display: flex;
  flex-direction: column;

  label {
    font-size: 0.875rem;
    color: ${props => props.theme.colors.darkBlue};
    opacity: 0.4;
    margin-bottom: 0.3rem;
    text-transform: capitalize;
  }

  input {
    background-color: ${props => props.theme.colors.lightPurple};
    height: ${props => (props.inputSize === 'small' ? '2.2rem' : '2.7rem')};
    width: ${props => (props.inputSize === 'small' ? '8rem' : '16rem')};
    border-radius: 0.25rem;
    border: none;
    font-weight: 400;
    font-size: ${props => (props.inputSize === 'small' ? '0.8rem' : '1rem')};
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 1.5rem;
    color: ${props => props.theme.colors.darkBlue};
  }

  input:focus {
    box-shadow: 0 0 0 0.1rem ${props => props.theme.colors.purple};
  }

  input.error {
    box-shadow: 0 0 0 0.1rem ${props => props.theme.colors.red};
  }
`;