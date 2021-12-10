import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {x_bingapis_sdk, news_x_rapidapi_key, news_x_rapidapi_host, news_baseUrl, 
  crypto_x_rapidapi_key, crypto_x_rapidapi_host, crypto_baseUrl} from './hideednApiDet';
const cryptoApiHeaders = {
  'x-rapidapi-key': crypto_x_rapidapi_key,
  'x-rapidapi-host': crypto_x_rapidapi_host,
};

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });
const baseUrl= crypto_baseUrl;
export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl}),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`)
    }),
    getExchanges: builder.query({
      query: () => createRequest('/exchanges'),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history/${timeperiod}`),
    }),
  })
})

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetExchangesQuery } = cryptoApi;
