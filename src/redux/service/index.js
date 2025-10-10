import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, endpoints } from '../constant';

export const Apis = createApi({
  reducerPath: 'Apis',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().persistedData.token;
      console.log('state ===>', token);
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    register: builder.mutation({
      query: data => ({
        url: endpoints.SIGNUP,
        method: 'POST',
        body: data,
      }),
    }),
    login: builder.mutation({
      query: data => ({
        url: endpoints.LOGIN,
        method: 'POST',
        body: data,
      }),
    }),
    forgetPassword: builder.mutation({
      query: data => ({
        url: endpoints.VERIFY_EMAIL,
        method: 'POST',
        body: data,
      }),
    }),
    verifyOTP: builder.mutation({
      query: data => {
        return {
          url: endpoints.VERIFY_OTP,
          method: 'POST',
          body: data,
        };
      },
    }),
    passwordUpdate: builder.mutation({
      query: (data) => {
        return {
          url: endpoints.PASSWORD_MODIFICATION,
          method: 'POST',
          body: data
        };
      },
    }),
    // createUpdateProfile: builder.mutation({
    //   query: data => {
    //     return {
    //       url: endpoints.CREATE_UPDATE_PROFILE,
    //       method: 'POST',
    //       body: data,
    //     };
    //   },
    // }),
    // getProfile: builder.query({
    //   query: id => {
    //     //   console.log('typeeee',type)
    //     return {
    //       url: endpoints.GET_PROFILE(id),
    //       method: 'GET',
    //     };
    //   },
    // }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useForgetPasswordMutation,
  useVerifyOTPMutation,
  usePasswordUpdateMutation
  // useLazyGetProfileQuery,

} = Apis;
