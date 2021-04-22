import styled from 'styled-components';
import { IExchangeRateCardProps } from './types';

const ExchangeRateCardStyles = styled.div<IExchangeRateCardProps>`
  width: 14rem;
  margin-right: 1rem;
  height: 8.75rem;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.darkerBlue};
  border-radius: 0.3rem;
  -webkit-box-shadow: 10px 10px 19px -12px rgba(0, 0, 0, 0.44);
  -moz-box-shadow: 10px 10px 19px -12px rgba(0, 0, 0, 0.44);
  box-shadow: 10px 10px 19px -12px rgba(0, 0, 0, 0.44);

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
    font-size: 0.938rem;
    font-weight: 700;
    line-height: 1.375rem;
  }

  .crypto-name {
    color: ${props => props.theme.colors.white};
    font-size: 0.938rem;
    font-weight: 700;
  }

  .crypto-price {
    color: ${props => props.theme.colors.white};
    font-size: 1.25rem;
    padding-left: 1rem;
  }

  .crypto-volume {
    padding-left: 1rem;
    color: ${props => props.theme.colors.white};
    font-size: 0.75rem;
  }

  .chart-plot {
    height: 5rem;
    width: 14rem;
    overflow: hidden;
  }
`;

export default ExchangeRateCardStyles;
