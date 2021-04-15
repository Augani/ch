import styled from 'styled-components';

export const FeedBackStyled = styled.div`
  .modal-c-signupFeedback {
    width: 20rem;
    height: 25rem;
    border-radius: 0.2rem;
    position: relative;
    color: ${props => props.theme.colors.darkBlue};
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .modal-c__title {
    margin-bottom: 0.75rem;
    font-size: 2.25rem;
    font-weight: bold;
    line-height: 3.063rem;
  }

  .modal-c-contactFeedback {
    width: 20rem;
    height: 25rem;
    border-radius: 0.2rem;
    position: relative;
    color: var(--dark-blue);
    display: flex;
    flex-direction: column;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .modal-c-feedback {
    font-size: 0.875rem;
    font-weight: 600;
  }
`;
