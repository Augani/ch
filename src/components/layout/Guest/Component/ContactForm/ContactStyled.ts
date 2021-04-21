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
    background-color: ${props => props.theme.colors.light};
    border: none;
    border-radius: 0.2rem;
    color: ${props => props.theme.colors.darkBlue};
    font-size: 1rem;
    padding: 0.6rem;
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
    margin-bottom: 0.75rem;
    font-size: 2.25rem;
    font-weight: bold;
    line-height: 3.063rem;
    color: ${props => props.theme.colors.darkBlue};
  }

  .modal-c-input {
    height: 3rem;
    width: 25rem;
    background: ${props => props.theme.colors.light};
    border: none;
    border-radius: 0.25rem;
    color: ${props => props.theme.colors.darkBlue};
    font-size: 1rem;
    padding: 0.6rem;
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
    letter-spacing: 0.05em;
    text-transform: uppercase;
    border-radius: 0.2rem;
    text-transform: uppercase;
    font-size: 1.125rem;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.lightBlue};
    border: none;
    box-shadow: ${props => props.theme.shadow.five};
    cursor: pointer;
  }
`;
