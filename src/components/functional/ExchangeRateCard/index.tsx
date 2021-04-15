import * as React from 'react';
import Chart from './Utils/chart';
import { IExchangeRateCardProps } from './types';
import ChartCardStyles from './styles';

const ExhangeRateCard: React.FunctionComponent<IExchangeRateCardProps> = props => {
  const { cryptoData } = props;
  return (
    <ChartCardStyles cryptoData={cryptoData}>
      <div className='name-holder'>
        <div className='crypto-name'>{cryptoData.name}</div>
        <div className='change-rate' data-testid='rate'>
          {cryptoData.change}%
        </div>
      </div>
      <div className='crypto-price'>{cryptoData.price}</div>
      <div className='crypto-volume'>Volume: {cryptoData.volume}</div>
      <div className='chart-plot'>
        <Chart data={cryptoData.history} mode={cryptoData.change} />
      </div>
    </ChartCardStyles>
  );
};

export default ExhangeRateCard;
