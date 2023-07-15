import axios from "axios";
import { useEffect, useState } from "react";

interface APIResponse {}

export const useFetch = (url: string) => {
  const [fetchData, setFetchData] = useState<APIResponse[]>([]);
  const [errorResponse, setErrorResponse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setFetchData([response.data]);
      } catch (error: any) {
        setErrorResponse(error);
      }
    };

    fetchData();
  }, [url]);

  return { errorResponse, fetchData };
};
