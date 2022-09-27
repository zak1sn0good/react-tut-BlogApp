import { useEffect, useState } from 'react';

const useFetch = (url) => {
  
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    setTimeout(() => {
      fetch(url)
      .then( jsonData => {
        return jsonData.json()
      })
      .then( data => {
        setLoading(false);
        setBlogs(data);
      })
      .catch( err => {
        setLoading(false);
        setError(true);
      });
    }, 3000);
  }, [url]);

  return [blogs, loading, error, setBlogs];
};

export default useFetch;