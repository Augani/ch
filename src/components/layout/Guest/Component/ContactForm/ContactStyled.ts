import styled from 'styled-components';

export const ContactStyled = styled.div`
  .modal-c-contact {
    width: 25rem;
    min-height: 30.75rem;
    background-color: var(--text-normal);
    border-radius: 0.2rem;
    position: relative;
    color: var(--dark-blue);
    display: flex;
    flex-direction: column;
  }

  .modal-c-textarea {
    width: 100%;
    font-family: Open Sans;
    height: 7.438rem;
    background-color: rgba(149, 151, 161, 0.1);
    border: none;
    border-radius: 0.2rem;
    color: ${props => props.theme.colors.darkBlue};
    font-size: 1rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .modal-c-formgroup {
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
    width: 100%;
  }

  .modal-c-label {
    font-size: 0.875rem;
    margin-bottom: 0.3rem;
    color: ${props => props.theme.colors.darkBlue};
    opacity: 0.4;
  }

  .modal-c-title {
    margin: 0;
    margin-bottom: 2.25rem;
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
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    line-height: 1.5rem;
  }

  textarea::-webkit-input-placeholder {
    color: ${props => props.theme.colors.darkBlue};
    opacity: 0.4;
  }
  ::-moz-placeholder {
    color: ${props => props.theme.colors.darkBlue};
    opacity: 0.4;
  }
  :-ms-input-placeholder {
    color: ${props => props.theme.colors.darkBlue};
    opacity: 0.4;
  }
  :-moz-placeholder {
    color: ${props => props.theme.colors.darkBlue};
    opacity: 0.4;
  }

  .modal-c-subtitle {
    font-size: 1.125rem;
    font-weight: bold;
    margin-bottom: 2.25rem;
  }

  .modal-c-submit {
    width: 14.5rem;
    margin-left: auto;
    height: 3.5rem;
    margin-top: 3rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    border-radius: 0.2rem;
    text-transform: uppercase;
    font-size: 1.125rem;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.lightBlue};
    border: none;
    box-shadow: 0rem 0.25rem 1rem rgba(78, 81, 255, 0.32);
    cursor: pointer;
  }

  .modal-c-submit:disabled {
    box-shadow: none;
  }
`;
