import styled from 'styled-components';

export const SubscribeStyled = styled.div`
  .modal-c-signup {
    width: 25rem;
    height: 26.23rem;
    background-color: ${props => props.theme.colors.white};
    border-radius: 0.2rem;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .modal-c-formgroup {
    margin-top: 1.5rem;
    width: 100%;
  }

  .modal-c-title {
    margin: 0;
    margin-bottom: 0.75rem;
    font-size: 2.25rem;
    font-weight: bold;
    line-height: 3.063rem;
    color: ${props => props.theme.colors.darkBlue};
  }

  .modal-c-input {
    height: 3rem;
    width: 25rem;
    background: rgba(149, 151, 161, 0.1);
    border: none;
    border-radius: 0.25rem;
    color: ${props => props.theme.colors.darkBlue};
    font-size: 1rem;
    padding-right: 1.5rem;
    line-height: 1.5rem;
  }

  :where(.modal-c-input)::placeholder {
    color: ${props => props.theme.colors.darkBlue};
    opacity: 0.4;
  }

  .modal-c-subtitle {
    font-size: 1.125rem;
    font-weight: bold;
    line-height: 1.563rem;
    margin-bottom: 0.75rem;
  }

  .modal-c-submit {
    width: 14.5rem;
    margin-left: auto;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    height: 3.5rem;
    letter-spacing: 0.05em;
    margin-top: 3rem;
    border-radius: 0.2rem;
    text-transform: uppercase;
    font-size: 1.125rem;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.lightBlue};
    box-shadow: 0px 4px 16px rgba(78, 81, 255, 0.32);
    border: none;
    cursor: pointer;
  }

  .modal-c-submit:disabled {
    background-color: ${props => props.theme.colors.light};
    box-shadow: none;
  }

  .modal-c-submit:disabled:hover {
    background-color: ${props => props.theme.colors.light};
  }
`;
