import styled from 'styled-components';

export const SubscribeStyled = styled.div`
  .modal-c-signup {
    width: 25rem;
    height: 29.063rem;
    background-color: var(--text-normal);
    border-radius: 0.2rem;
    position: relative;
    color: var(--dark-blue);
    display: flex;
    flex-direction: column;
  }

  .modal-c-textarea {
    width: 100%;
    height: 7.438rem;
    background-color: var(--back-gray);
    border: none;
    border-radius: 0.2rem;
    color: var(--dark-blue);
    font-size: 0.9rem;
    padding: 0.6rem;
  }

  .modal-c-formgroup {
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
    width: 100%;
  }

  .modal-c-label {
    font-size: 0.875rem;
    color: ${props => props.theme.colors.darkBlue};
    opacity: 0.4;
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

  :where(.modal-c-textarea, .modal-c-input)::placeholder {
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
    border-radius: 0.2rem;
    text-transform: uppercase;
    font-size: 0.9rem;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.lightBlue};
    box-shadow: ${props => props.theme.shadow.five};
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
