import { AxiosError, AxiosRequestConfig } from "axios";

export interface FetchResult<T> {
    data: T | null;
    loading: boolean;
    error: AxiosError | unknown;
}

export interface FetchProps {
    method: AxiosRequestConfig["method"];
    baseURL: string;
    data?: unknown;
}