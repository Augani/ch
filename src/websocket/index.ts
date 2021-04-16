interface IConnectSocketEmit {
  channel: string;
  data?: {
    [key: string]: number | string;
  };
  callback?(data: unknown): void;
}

class ConnectSocket {
  private address = 'ws://3.121.186.68:9090/';
  private socket: WebSocket;
  public binaryType: 'arraybuffer' | 'blob' = 'arraybuffer';

  constructor() {
    this.socket = new WebSocket(this.address, []);

    this.socket.binaryType = this.binaryType;
  }

//   public emit:<IConnectSocketEmit>(channel, data, callback): void {
    
//     const emitData = {
//       type: channel,
//       payload: data
//     };

//   }

  //   const skt =
  //   skt.binaryType = 'arraybuffer';
  //   const message = {
  //     type: 'signup',
  //     payload: {
  //       email: 'rafael@coinhaven.com',
  //       fullName: 'Rafael Ferreira'
  //     }
  //     // and token when it's need
  //   };
  //   skt.onopen = () => {
  //     // future
  //     // const binaryMessage = (new TextEncoding()).encode(JSON.stringify(message));
  //     // for now
  //     const sktSendReturn = skt.send(JSON.stringify(message));
  //   };
  //   // skt.close();
  //   skt.onmessage = data => {
  //     console.log(data);
  //   };
}

export default ConnectSocket;
