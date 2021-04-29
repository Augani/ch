import Socket from './index';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ISocket extends Socket {}

export type Tpayload = {
  [key: string]: number | string | string[];
};
export type Tcallback = (error: boolean, data: unknown | undefined) => void;
export type TmessageType = string;
export type TbinaryType = 'arraybuffer' | 'blob';
export interface ISend {
  type: TmessageType;
  payload?: Tpayload;
  subscribe?: boolean;
  callback?: Tcallback;
}
export interface IReceive {
  type: TmessageType;
  callback?: Tcallback;
  subscribe?: boolean;
}

export default ISocket;
