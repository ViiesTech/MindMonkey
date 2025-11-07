import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ADMIN_URL, endpoints} from '../constant';
import { id } from 'rn-emoji-keyboard';

export const AdminApis = createApi({
  reducerPath: 'AdminApis',
  baseQuery: fetchBaseQuery({
    baseUrl: ADMIN_URL,
    prepareHeaders: (headers, {getState}) => {
      const token = getState().persistedData.token;
      console.log('state ===>', token);
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    getAllCategories: builder.query({
      query: (id) => ({
        url: endpoints.GET_ALL_CATEGORIES(id),
        method: 'GET',
      }),
    }),
  }),
});

export const {useLazyGetAllCategoriesQuery} = AdminApis;
