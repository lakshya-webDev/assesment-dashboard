import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const useWebSocket = (url, event = 'data') => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('disconnected');
  const [error, setError] = useState(null);

  useEffect(() => {
    const socket = io(url);

    setStatus('connecting');
    socket.on('connect', () => setStatus('connected'));
    socket.on('disconnect', () => setStatus('disconnected'));
    socket.on('reconnect_attempt', () => setStatus('reconnecting'));
    socket.on('connect_error', (err) => {
      setError(err.message);
      setStatus('error');
    });

    // Listen for incoming data on the specified event channel
    socket.on(event, (newData) => {
      setData((prevData) => [...prevData, newData]); 
    });

    return () => {
      socket.disconnect();
      setStatus('disconnected');
    };
  }, [url, event]);

  return { data, status, error };
};

export default useWebSocket;
