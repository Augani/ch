import { ReactNode } from 'react';

export interface CardProps {
  className?: string;
  id?: string;
  cryptoData: Crypto;
}

export interface DataType {
  date: string;
  value: string;
}

export interface Crypto {
  /** the name of the crypto being passed to the component */
  name: string;
  /** the volume of crypto traded */
  volume: number;
  /** the price of the crypto */
  price: number;
  /** the percentage change in the price */
  change: string;
  /** a history of cyrpto data for a particular period */
  history?: DataType[] | undefined;
}

export interface ChartProps {
  data: DataType[] | undefined;
  mode: string;
  children?: ReactNode;
}
