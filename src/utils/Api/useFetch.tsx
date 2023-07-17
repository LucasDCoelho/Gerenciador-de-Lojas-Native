import axios from "axios";
import { useEffect, useState } from "react";
import { AgendaEntry } from "react-native-calendars";

export interface APIResponse extends AgendaEntry{
  date: any;
  name: string;
  height: number;
  id: any;
}

export const useFetch = (url: string) => {
  const [fetchData, setFetchData] = useState([]);
  const [errorResponse, setErrorResponse] = useState(null);
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setFetchData(response.data);
      } catch (error: any) {
        setErrorResponse(error);
      }
    };
    fetchData();
  }, [url]);

  return { errorResponse, fetchData};
};

