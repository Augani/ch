import React, { FunctionComponent } from 'react';
import Chart from './Utils/chart';
import { IExchangeRateCardProps } from './types';
import ExchangeRateCardStyled from './styles';
import { round } from 'lodash';
import { DecayingView } from '@utils-components/DecayingView/DecayingView';

const ExhangeRateCard: FunctionComponent<IExchangeRateCardProps> = props => {
  const { cryptoData } = props;

  const roundNumbers = (value: number) => round(value ?? 0, 2).toFixed(2);

  return (
    <ExchangeRateCardStyled cryptoData={cryptoData}>
      <div className='name-holder'>
        <div className='crypto-name'>{cryptoData.symbol}</div>
        <div className='change-rate' data-rate='rate'>
          {cryptoData.percentage > 0
            ? `+${roundNumbers(cryptoData.percentage)}`
            : roundNumbers(cryptoData.percentage)}
          %
        </div>
      </div>
      <div className='crypto-price'>{roundNumbers(cryptoData.price)}</div>
      <div className='crypto-volume'>
        Volume: {roundNumbers(cryptoData.volume)}
      </div>
      <div className='chart-plot'>
        <DecayingView isVisible={cryptoData.history !== undefined}>
          <Chart
            data={cryptoData.history?.map(data => round(data))}
            mode={String(cryptoData.percentage)}
          />
        </DecayingView>
      </div>
    </ExchangeRateCardStyled>
  );
};

export default ExhangeRateCard;
