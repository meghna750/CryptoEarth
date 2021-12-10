import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-key': '2a6991e19bmsh80f4b5b2b1c836ap174cf9jsn00dd072c0157',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
};
const baseUrl= 'https://bing-news-search1.p.rapidapi.com';
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
// const cryptoNewsHeaders={
//     'x-bingapis-sdk': 'true',
//     'x-rapidapi-key': '2a6991e19bmsh80f4b5b2b1c836ap174cf9jsn00dd072c0157',
//     'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
//  }
// const baseUrl= 'https://bing-news-search1.p.rapidapi.com';

// const createRequest=(url)=>({url,headers:cryptoNewsHeaders});

// export const cryptoNewsApi= createApi({
//     reducerPath:'cryptoNewsApi',
//     baseQuery: fetchBaseQuery({baseUrl}),
//     endPoints:(builder)=>({
//         getCryptoNews: builder.query({
//             query:({newsCategory, count})=>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
//         }),
//         // getCryptos: builder.query({
//         //     query: (count) => createRequest(`/coins?limit=${count}`)
//         //   })
//     }),
// });
// export const {useGetCryptoNewsQuery}= cryptoNewsApi;

// var options = {
//     method: 'GET',
//     url: 'https://bing-news-search1.p.rapidapi.com/news',
//     params: {safeSearch: 'Off', textFormat: 'Raw'},
//     headers: {
//       'x-bingapis-sdk': 'true',
//       'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
//       'x-rapidapi-key': '2a6991e19bmsh80f4b5b2b1c836ap174cf9jsn00dd072c0157'
//     }
//   };