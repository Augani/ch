import styled from 'styled-components';
import { ITextFieldProps, ISelectListProps } from './type';

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
    background-color: ${props => props.theme.colors.light};
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

  input::placeholder {
    color: ${props => props.theme.colors.darkBlue};
    opacity: 0.4;
  }

  input:focus {
    box-shadow: 0 0 0 0.1rem ${props => props.theme.colors.extraLightBlue};
  }

  .error-field {
    display: flex;
    margin-top: 0.25rem;
    align-items: center;
    max-width: ${props => (props.inputSize === 'small' ? '8rem' : '16rem')};
  }

  .error-field small {
    margin-left: 0.25rem;
    color: ${props => props.theme.colors.red};
    font-size: 0.75rem;
  }

  input.error {
    box-shadow: 0 0 0 0.1rem ${props => props.theme.colors.red};
  }
`;

export const SelectFieldStyled = styled.div`
  position: relative;

  label {
    font-size: 0.875rem;
    color: ${props => props.theme.colors.darkBlue};
    opacity: 0.4;
    margin-bottom: 0.3rem;
    text-transform: capitalize;
  }

  img {
    height: 1.5rem;
    width: 1.5rem;
    margin-right: 1rem;
  }

  .field {
    position: relative;
    background: rgba(149, 151, 161, 0.1);
    max-width: 30rem;
    max-height: 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: Open Sans;
    justify-content: space-between;
    border-radius: 0.25rem;
    margin-bottom: 0.63rem;
    padding: 0 1.313rem;
    border: 0.094rem solid transparent;

    :hover {
      border: 0.094rem solid ${props => props.theme.colors.extraLightBlue};
    }

    p {
      opacity: 0.8;
      color: ${props => props.theme.colors.darkBlue};
      font-style: normal;
      font-weight: normal;
      font-size: 0.875rem;
      line-height: 1.5rem;
    }

    p:hover {
      color: ${props => props.theme.colors.lightBlue};
    }

    .inner {
      max-height: 3rem;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
`;

export const ListStyled = styled.div<ISelectListProps>`
  display: ${props => (props.active ? 'flex' : 'none')};
  position: absolute;
  right: 0;
  bottom: -11rem;
  width: 7.938rem;
  height: 10.5rem;
  transition: all 1s ease;
  flex-direction: column;
  padding-top: 0.75rem;

  overflow-y: auto;
  background: ${props => props.theme.colors.white};
  box-shadow: 0px 100px 80px rgba(157, 157, 174, 0.07),
    0px 22px 24px rgba(157, 157, 174, 0.04),
    0px 16px 10px rgba(157, 157, 174, 0.04),
    0px 6px 6px rgba(157, 157, 174, 0.03);
  border-radius: 0.25rem;
  z-index: 10;

  ul {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  li {
    width: 6.938rem;
    height: 3rem;
    padding: 0.75rem 1rem;
    display: flex;
    flex-direction: row;
    color: ${props => props.theme.colors.darkBlue};
    align-items: center;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 0.875rem;
    line-height: 1.5rem;
    cursor: pointer;
    border-radius: 0.5rem;
  }

  hr {
    height: 0.063rem;
    width: 6rem;
    background: ${props => props.theme.colors.extraLightBlue};
    opacity: 0.1;
    margin: 0;
  }

  li:hover {
    background: rgba(217, 218, 242, 0.3);
    color: ${props => props.theme.colors.lightBlue};
  }
`;
