import useSWR from 'swr';
import { fetcher, baseUrl } from '../lib/fetcher';

export default function useApi(parameter) {
  const { data, error } = useSWR(`${baseUrl}${parameter}`, fetcher);
  return {
    data: data,
    isLoading: !data && !error,
    isError: error,
  };
}
