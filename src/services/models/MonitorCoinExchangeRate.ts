/**
 * WebSocket request type: monitor/coins/exchange-rate
 */
export interface MonitorCoinExchangeRateRequest {
  coins: string[];
}

export interface MonitorCoinExchangeRateResponse {
  symbol: string;
  price: number;
  currency: string;
  volume: number;
  percentage: number;
  history: number[];
}
