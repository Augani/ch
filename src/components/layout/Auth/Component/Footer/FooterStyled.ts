import styled from 'styled-components';

export const FooterStyled = styled.footer`
  background-color: transparent;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;

  .container {
    width: ${props => props.theme.sizes.container()};
    margin: 0 auto;
    padding-bottom: 3.875rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const Copyright = styled.div`
  background-color: transparent;
  color: ${props => props.theme.colors.darkBlue};
  text-align: center;
  font-size: 0.875rem;
  font-weight: 300;
  height: 2.5rem;
  line-height: 2.5rem;
`;
