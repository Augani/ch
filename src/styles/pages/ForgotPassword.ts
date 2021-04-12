import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  background-position: right center;

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .logo svg {
      height: 2rem;
    }
  }

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: ${props => props.theme.gradients.lightDiagonal};
    opacity: 0.8;
    transform: matrix(1, 0, 0, -1, 0, 0);
  }
`;
