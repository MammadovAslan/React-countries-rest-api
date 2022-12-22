import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = (url) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const makeRequest = async (callback) => {
    setLoading(true);
    try {
      const res = await axios(url);
      const data = res.data;
      callback(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    makeRequest: makeRequest,
    error: error,
    loading: loading,
  };
};

export default useFetch;
