import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const useWebSocket = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const socket = io(url);
    socket.on('data', (newData) => setData(newData));
    return () => {
      socket.disconnect();
    };
  }, [url]);

  return data;
};

export default useWebSocket;