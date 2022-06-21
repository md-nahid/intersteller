export const baseUrl = 'https://fakestoreapi.com/';
export const fetcher = async (...args) => await fetch(...args).then((res) => res.json());
