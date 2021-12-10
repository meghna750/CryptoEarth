import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'x-rapidapi-key': '2a6991e19bmsh80f4b5b2b1c836ap174cf9jsn00dd072c0157',
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
};

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });
const baseUrl= 'https://coinranking1.p.rapidapi.com' ;
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
// var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/stats',
//     headers: {
//       'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//       'x-rapidapi-key': '2a6991e19bmsh80f4b5b2b1c836ap174cf9jsn00dd072c0157'
//     }
//   };