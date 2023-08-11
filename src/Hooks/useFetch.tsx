import { useState, useEffect } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";
import { FetchProps, FetchResult } from "../utils/types/hooks";

const useFetch = <T,>(req: FetchProps): FetchResult<T> => {
  const { method, baseURL } = req;

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError | unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<T> = await axios({
          method,
          baseURL,
        });
        setData(response.data);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [method, baseURL]);

  return { data, loading, error };
};

export default useFetch;
