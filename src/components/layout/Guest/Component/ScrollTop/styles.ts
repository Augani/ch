import styled from 'styled-components';

export const ScrollTopStyle = styled.div`
  .arrow-top {
    height: 3.5rem;
    width: 3.769rem;
    position: fixed;
    z-index: 50;
    cursor: pointer;
    bottom: 3.542rem;
    right: 3.543rem;
    background-image: url('/assets/images/PolygonArrow.svg');
    background-size: contain;
    ${({ theme }) =>
      theme.mediaQueries.down('xs')(` 
    height: 2.5rem;
    width: 2.769rem;
    bottom: 1.542rem;
    right: 1.543rem;
    z-index: 99999;
    `)}
  }
`;
