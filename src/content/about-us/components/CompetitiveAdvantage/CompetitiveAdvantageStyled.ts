import Styled from 'styled-components';

const CompetitiveAdvantageStyled = Styled.div`
    
    width: 17.5rem;
    text-align: center;
    ${({ theme }) =>
      theme.mediaQueries.down('sm')(`
      padding-bottom: 1.875rem;
    `)}
    
    
    .competitive-icon {
      display: inline-block;
    }

    h5 {
      text-transform: capitalize;
      font-family: ${props => props.theme.typography.config.fontFamilyOpenSans};
      color: ${props => props.theme.colors.white};
      font-weight: 600;
      font-size: 1.5rem;
      margin-top: 1.25rem;
    }
    p {
      font-family: ${props => props.theme.typography.config.fontFamilyOpenSans};
      font-size: 1rem;
      color: ${props => props.theme.colors.white};
      line-height: normal;
      white-space: unset;
      margin-top: 1.125rem;
      margin-bottom: 0;
    }
`;

export default CompetitiveAdvantageStyled;
