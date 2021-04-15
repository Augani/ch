import * as React from 'react';
import Chart from './chart';
import { CardProps } from './types';
import CardStyled from './indexStyled';

export default function Card(props: CardProps): React.ReactElement {
  return (
    <CardStyled cryptoData={props.cryptoData} className={props.className}>
      <div className='name-holder'>
        <h4 className='crypto-name'>{props.cryptoData.name}</h4>
        <h4 className='change-rate' data-testid='rate'>
          {props.cryptoData.change}%
        </h4>
      </div>
      <h4 className='crypto-price'>{props.cryptoData.price}</h4>
      <h4 className='crypto-volume'>Volume: {props.cryptoData.volume}</h4>
      <div className='chart-plot'>
        <Chart data={props.cryptoData.history} mode={props.cryptoData.change} />
      </div>
    </CardStyled>
  );
}
