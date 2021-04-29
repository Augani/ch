/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs';
import ExchangeRateCard from './index';

export default {
  component: ExchangeRateCard,
  decorators: [withKnobs],
  title: 'Functional/ExchangeRateCard'
};

export const Card = () => {
  const data = object('Data passed', {
    symbol: 'BTC/USDT',
    price: 7.2,
    percentage: 10.6,
    volume: 36767787687,
    history: [
      5000.96,
      8197.8,
      8298.69,
      8880.23,
      8997.57,
      9001.64,
      8958.55,
      8000.64,
      7000.55
    ]
  });
  return <ExchangeRateCard cryptoData={data} />;
};
