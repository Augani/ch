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

  .menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-grow: 1;
    nav a {
      color: ${props => props.theme.colors.white};
      font-size: 0.9375rem;
      font-family: ${props => props.theme.typography.config.fontFamilyOpenSans};
      font-weight: ${props => props.theme.typography.config.fontWeightSemiBold};
      display: inline-block;
      margin: 0 1.25rem;
      text-transform: capitalize;
      &:hover,
      &.active {
        text-shadow: 0 3px 9px rgba(38, 226, 156, 0.2);
        color: ${props => props.theme.pallets.primary};
      }
    }
  }
`;
