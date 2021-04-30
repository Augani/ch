import styled from 'styled-components';

export const HeaderStyled = styled.header`
  padding-top: 1.5625rem;
  padding-bottom: 1.5625rem;
  min-height: 1.5625rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) =>
    theme.mediaQueries.down('lg')(`
      padding-top: 2rem;
      padding-bottom: 2rem;
  `)}

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
    ${({ theme }) =>
      theme.mediaQueries.down('lg')(`
      width: ${theme.sizes.container('lg')};
    `)}

    ${({ theme }) =>
      theme.mediaQueries.down('sm')(`
      width: ${theme.sizes.container('sm')};
    `)}

    ${({ theme }) =>
      theme.mediaQueries.down('xs')(`
      width: ${theme.sizes.container('xs')};
      justify-content: space-between;
  `)}
  }

  .logo {
    width: calc(9.5rem + 4.375rem);
    padding-right: 4.375rem;
    z-index: 3;
  }

  .logo a {
    display: block;
  }

  .menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-grow: 1;

    &.menu-desktop {
      ${({ theme }) =>
        theme.mediaQueries.down('xs')(`
      display: none;
    `)}
    }

    &.menu-mobile {
      flex-grow: unset;
      width: 1.5rem;
      height: 1.5rem;
      position: relative;

      ${({ theme }) =>
        theme.mediaQueries.up('xs')(`
        display: none;
    `)}

      button {
        border: 0;
        background-color: transparent;
        padding: 0;
        margin: 0;
        z-index: 2;
        width: 1.5rem;
        height: 1.5rem;

        img {
          width: 100%;
        }
      }

      .menu-mobile-items {
        background-color: ${({ theme }) => theme.colors.white};
        width: 17rem;
        padding: 0.5rem;
        border-radius: 0.25rem;
        min-height: 50px;
        position: absolute;
        top: 2.5rem;
        right: 0;
        z-index: 3;

        nav {
          display: flex;
          overflow: hidden;
          flex-direction: column;

          a {
            margin: 0;
            padding: 0.75rem 1rem;
            display: block;
            height: 2.8125rem;
            font-weight: 500;
            font-size: 0.875rem;
            letter-spacing: 0.5px;
            border-radius: 0.3125rem;
            color: ${({ theme }) => theme.colors.darkBlue};
            &.active {
              color: ${({ theme }) => theme.colors.lightBlue};
              background-color: rgba(217, 218, 242, 0.3);
            }
          }
        }

        .last-menu-item {
          margin-top: 0.5rem;
          height: 4rem;
          display: flex;
          justify-content: center;
          align-items: center;
          border-top: 1px solid rgba(0, 29, 198, 0.1);
          a {
            font-weight: bold;
            font-size: 0.875rem;
            line-height: 1.5rem;
            letter-spacing: 0.05em;
            text-transform: capitalize;
          }
        }
      }

      .menu-mobile-backdrop {
        background-color: rgba(0, 0, 0, 0.5);
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
      }
    }

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
