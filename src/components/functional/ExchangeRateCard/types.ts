import { ReactNode } from 'react';

export interface IExchangeRateCardProps {
  cryptoData: ICrypto;
}

export interface ICryptoHistoryItem {
  date: string;
  value: string;
}

export interface ICrypto {
  /** the name of the crypto being passed to the component */
  name: string;
  /** the volume of crypto traded */
  volume: number;
  /** the price of the crypto */
  price: number;
  /** the percentage change in the price */
  change: string;
  /** a history of cyrpto data for a particular period */
  history?: ICryptoHistoryItem[];
}

export interface IChartProps {
  data: ICryptoHistoryItem[] | undefined;
  mode: string;
  children?: ReactNode;
}
