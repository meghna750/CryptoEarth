import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {x_bingapis_sdk, news_x_rapidapi_key, news_x_rapidapi_host, news_baseUrl, 
  crypto_x_rapidapi_key, crypto_x_rapidapi_host, crypto_baseUrl} from './hideednApiDet';
const cryptoNewsHeaders = {
    'x-bingapis-sdk': x_bingapis_sdk,
    'x-rapidapi-key': news_x_rapidapi_key,
    'x-rapidapi-host': news_x_rapidapi_host,
};
const baseUrl= news_baseUrl;
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl}),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;


