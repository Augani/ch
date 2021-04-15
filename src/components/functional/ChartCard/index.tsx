import * as React from 'react';
import Chart from './Utils/chart';
import { CardProps } from './types';
import ChartCardStyles from './Styles';

export default function Card(props: CardProps): React.ReactElement {
  return (
    <ChartCardStyles cryptoData={props.cryptoData}>
      <div className='name-holder'>
        <div className='crypto-name'>{props.cryptoData.name}</div>
        <div className='change-rate' data-testid='rate'>
          {props.cryptoData.change}%
        </div>
      </div>
      <div className='crypto-price'>{props.cryptoData.price}</div>
      <div className='crypto-volume'>Volume: {props.cryptoData.volume}</div>
      <div className='chart-plot'>
        <Chart data={props.cryptoData.history} mode={props.cryptoData.change} />
      </div>
    </ChartCardStyles>
  );
}
