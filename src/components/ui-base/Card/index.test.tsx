// __tests__/CheckboxWithLabel-test.js
import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Card from './index';

const cryptoData = {
  name: 'LTC/USDT',
  price: 43.62,
  change: '+0.59',
  volume: 1161419.5017,
  history: [
    { date: '2018-04-17', value: '8285.96' },
    { date: '2018-04-18', value: '8197.8' },
    { date: '2018-04-19', value: '8298.69' },
    { date: '2018-04-20', value: '8880.23' },
    { date: '2018-04-21', value: '8997.57' },
    { date: '2018-04-22', value: '9001.64' },
    { date: '2018-04-23', value: '8958.55' },
    { date: '2018-04-24', value: '9001.64' },
    { date: '2018-04-25', value: '9500.55' }
  ]
};

describe('Card', () => {
  test('Renders card component correctly', () => {
    render(<Card cryptoData={cryptoData} />);
    expect(screen.getByText('LTC/USDT')).toBeInTheDocument();
    expect(screen.getByText('43.62')).toBeInTheDocument();
    expect(screen.getByText('+0.59%')).toBeInTheDocument();
    expect(screen.getByText('Volume: 1161419.5017')).toBeInTheDocument();
    expect(screen.getByTestId('rate')).toHaveStyle('color: #26E29C');
  });
});
