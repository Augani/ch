import { DependencyList, useEffect, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useWebSocket = <TDocType>(
  selector: () => Promise<TDocType | undefined>,
  deps: DependencyList
) => {
  const [data, setData] = useState<TDocType | undefined>(undefined);
  const [error, setError] = useState<boolean | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const fetchResults = async () => {
    setData(undefined);
    setError(undefined);
    setLoading(true);

    try {
      const address = 'ws://3.121.186.68:9090/';
      const skt = new WebSocket(address, []);
      skt.binaryType = 'arraybuffer';
      const message = {
        type: 'signup',
        payload: {
          email: 'rafael@coinhaven.com',
          fullName: 'Rafael Ferreira'
        }
        // and token when it's need
      };
      skt.onopen = () => {
        // future
        // const binaryMessage = (new TextEncoding()).encode(JSON.stringify(message));
        // for now
        skt.send(JSON.stringify(message));
      };
      // skt.close();
      skt.onmessage = data => {
        console.log(data);
      };

      setData(await selector());
    } catch (err) {
      if (err.body !== undefined) {
        setError(true);
      } else {
        setError(err);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResults();

    return () => {
      setData(undefined);
      setError(undefined);
      setLoading(false);
    };
  }, deps);

  return {
    data,
    error,
    loading,
    refetch: fetchResults
  };
};
