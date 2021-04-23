import { isUndefined, now, uniqueId } from 'lodash';

type Tpayload = {
  [key: string]: number | string | string[];
};
type Tcallback = (error: boolean, data: unknown | undefined) => void;
type TmessageType = string;
type TbinaryType = 'arraybuffer' | 'blob';
interface ISend {
  type: TmessageType;
  payload?: Tpayload;
  subscribe?: boolean;
  callback?: Tcallback;
}
interface IReceive {
  type: TmessageType;
  callback?: Tcallback;
  subscribe?: boolean;
}

class ConnectSocket {
  public address = 'ws://3.121.186.68:9191/';
  private socket: WebSocket;
  public binaryType: TbinaryType = 'arraybuffer';
  private requestIdsQueue: string[] = [];

  /**
   * @param url {string} A websocket URL. As an example: ws://{$DOMAIN} OR ws://{$DOMAIN}:{$PORT} OR ws://{$DOMAIN}:{$PORT}/coin-exchange
   * @param binaryType {TbinaryType}
   */
  constructor(
    url?: string,
    binaryType: TbinaryType | undefined = 'arraybuffer'
  ) {
    this.socket = new WebSocket(url ?? this.address, []);
    this.socket.binaryType = binaryType;
  }

  /**
   * This is a method to encode message before send over socket
   * @param data {Object} it should be an Object
   * @returns return an encoded message to send over socket
   */
  private encodeMessage(data: unknown) {
    return new TextEncoder().encode(JSON.stringify(data));
  }

  /**
   * This is a method to decode a message received from socket
   * @param data {BufferSource}
   * @returns It will return either Object
   */
  private decodeMessage(data: BufferSource) {
    return JSON.parse(new TextDecoder().decode(data));
  }

  /**
   * This method will help to generate a unique ID for each socket.send
   * @returns it will return an unique string
   */
  private generateRequestId = () => `${uniqueId('skt')}_${now()}`;

  /**
   * This method will add WS requestId in queue to monitor a response for that requestId from backend WS
   * @param id {string} it will be string.
   * @returns It will return TRUE on successfully added in queue either FALSE on failed.
   */
  private monitorRequestCallback(id: string): boolean {
    try {
      this.requestIdsQueue = [...this.requestIdsQueue, id];
      return true;
    } catch (e) {
      return false;
    }
  }

  /**
   * This method will remove requestId from queue to monitor backend response of backend socket.
   * @param id {string} It will be a string
   * @returns It will return TRUE on successfully removed from queue either FALSE on failed.
   */
  private unmonitorRequestCallback(id: string): boolean {
    try {
      if (!this.requestIdsQueue.includes(id)) {
        return false;
      }

      this.requestIdsQueue = this.requestIdsQueue.splice(
        this.requestIdsQueue.indexOf(id),
        1
      );
      return true;
    } catch (e) {
      return false;
    }
  }

  /**
   * This method will send request to backend by WebSocket.send and monitor backend response for that request.
   * On receive a response from backend it will execute callback function to provide a data what received from server.
   * @param type {TmessageType} type of WebSocket request
   * @param payload {Tpayload} data which backend required for this request
   * @param callback {Tcallback} callback function to receive what WS server send back for this request.
   * @param subscribe  {boolean} is this request to subscribe/monitor data change on backend? As an example, coin exchange rate change. If yes this should be true else false by default
   */
  public send({ type, payload, subscribe = false, callback }: ISend): void {
    const payloadData = payload !== undefined ? { payload } : {};
    const emitData = {
      type,
      requestId: this.generateRequestId(),
      ...payloadData
    };
    this.monitorRequestCallback(emitData.requestId);

    /* Execute promise until socket open successfully if got failed reject() either resolve() */
    new Promise((resolve, reject) => {
      /* On socket open resolve promise and move to send data to socket */
      this.socket.onopen = () => resolve(true);

      /* On socket error consider there is an error to connect with socket */
      this.socket.onerror = () => reject(new Error('Connection error'));
    })
      .then(isConnected => {
        /* Throw an error if socket is not connected. This case happen chance are too less */
        if (!isConnected) {
          throw new Error('Something wrong during connect to socket');
        }

        /* Send data to socket */
        this.socket.send(this.encodeMessage(emitData));

        /* listen to socket for response from backend */
        this.socket.onmessage = (response: MessageEvent) => {
          const data = this.decodeMessage(response.data);
          /************************************************
           * listen socket but respond only if send three conditions true
           * "type" and response "data.type" are equal.
           * "data.requestId" in "requestIdsQueue"
           * callback function should not undefined on emit method as third param
           ************************************************/
          if (!subscribe) {
            console.log('---this.requestIdsQueue---');
            console.log(this.requestIdsQueue);
            console.log(data);
            if (
              this.requestIdsQueue.includes(data.requestId) &&
              data?.type === type &&
              !isUndefined(callback)
            ) {
              console.log(`----data.requestId---- ${data.requestId}`);
              this.unmonitorRequestCallback(data.requestId);
              callback?.(false, data);
            }
          }
        };
      })
      .catch(() => callback?.(true, undefined));
  }

  /**
   * This method will listen to socket server for any specific broadcast on socket from backend.
   * @param type {TmessageType} a message type you want listen. As an example: monitor-exchange-rate for change in exchange rate and update on web page
   * @param callback {Tcallback} when this method listen any update on websocket for a type you requested for. It will return data in callback function.
   */
  public receive({ type, callback }: IReceive): void {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    new Promise((resolve, reject) => {
      this.socket.onmessage = (e: MessageEvent) => {
        console.log('e === ', e);
        resolve(e);
      };
    })
      .then((e: any) => {
        let data: any;
        try {
          data = JSON.parse(e.data);
        } catch (e) {
          throw new Error('Invalid data received from server');
        }

        callback?.(false, data);
      })
      .catch(() => {
        callback?.(true, undefined);
      });
  }
}

export default ConnectSocket;
