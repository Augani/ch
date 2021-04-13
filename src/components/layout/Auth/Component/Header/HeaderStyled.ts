import styled from 'styled-components';

export const HeaderStyled = styled.header`
  padding-top: 1.5625rem;
  padding-bottom: 1.5625rem;
  min-height: 1.5625rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &.light {
    background-color: transparent;
  }

  &.dark {
    background-color: ${props => props.theme.pallets.secondary};
  }

  .container {
    width: ${props => props.theme.sizes.container()};
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .logo {
    width: calc(9.5rem + 4.375rem);
    padding-right: 4.375rem;
  }

  .logo a {
    display: block;
  }
`;
