import styled from 'styled-components';
import { CardProps } from './types';

const CardStyled = styled.div<CardProps>`
  width: 20rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.darkerBlue};
  border-radius: 0.4rem;
  -webkit-box-shadow: ${props => props.theme.shadow.five};
  -moz-box-shadow: ${props => props.theme.shadow.five};
  box-shadow: ${props => props.theme.shadow.five};

  .name-holder {
    display: flex;
    flex-direction: row;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 1rem;
    justify-content: space-between;
  }

  .change-rate {
    color: ${props =>
      parseInt(props.cryptoData.change) < 0
        ? props.theme.colors.red
        : props.theme.colors.green};
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.375rem;
  }

  .crypto-name {
    color: ${props => props.theme.colors.white};
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.375rem;
  }

  .crypto-price {
    color: ${props => props.theme.colors.white};
    font-size: 1.25rem;
    font-weight: 400;
    padding-left: 1rem;
    line-height: 2.125rem;
    margin-bottom: 0.2rem;
  }

  .crypto-volume {
    color: ${props => props.theme.colors.white};
    font-size: 0.75rem;
    font-weight: 400;
    padding-left: 1rem;
  }

  .chart-plot {
    height: 5rem;
    width: 20rem;
  }
`;

export default CardStyled;
