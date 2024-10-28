import { useState, useEffect } from 'react';

const usePaginatedData = (url, page) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(`${url}?page=${page}`);
      const result = await res.json();
      setData(result.data);
      setLoading(false);
    };

    fetchData();
  }, [url, page]);

  return { data, loading };
};

export default usePaginatedData;
