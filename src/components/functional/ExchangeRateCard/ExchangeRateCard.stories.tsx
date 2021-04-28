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
    name: 'IDR',
    price: 7.2,
    change: '+10.6',
    volume: 36767787687,
    history: [
      {
        date: '2018-04-17',
        value: '5000.96'
      },
      {
        date: '2018-04-18',
        value: '8197.8'
      },
      {
        date: '2018-04-19',
        value: '8298.69'
      },
      {
        date: '2018-04-20',
        value: '8880.23'
      },
      {
        date: '2018-04-21',
        value: '8997.57'
      },
      {
        date: '2018-04-22',
        value: '9001.64'
      },
      {
        date: '2018-04-23',
        value: '8958.55'
      },
      {
        date: '2018-04-24',
        value: '8000.64'
      },
      {
        date: '2018-04-25',
        value: '7000.55'
      }
    ]
  });
  return <ExchangeRateCard cryptoData={data} />;
};
