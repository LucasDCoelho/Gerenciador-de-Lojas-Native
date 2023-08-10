import { useState, useEffect } from "react";
import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";

interface FetchResult<T> {
    data: T | null;
    loading: boolean;
    error: AxiosError | unknown;
}

interface FetchProps {
    method: AxiosRequestConfig["method"];
    url: string;
}

const useFetch = <T,>(req: FetchProps): FetchResult<T> => {
    const { method, url } = req;

    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<AxiosError | unknown>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response: AxiosResponse<T> = await axios({
                    method,
                    url,
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
    }, [method, url]);

    return { data, loading, error };
};

export default useFetch;