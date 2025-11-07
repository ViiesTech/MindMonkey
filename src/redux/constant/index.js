export const BASE_URL = 'https://predemo.site/MindMonkey/api/user/';
export const ADMIN_URL = 'https://predemo.site/MindMonkey/api/admin/';
export const IMAGE_URL = 'https://predemo.site/MindMonkey/';

export const endpoints = {
  SIGNUP: 'signUp',
  LOGIN: 'login',
  VERIFY_EMAIL: 'sendOtp',
  PASSWORD_MODIFICATION: 'resetPassword',
  VERIFY_OTP: 'verifyOtp',
  SIGNUP_GOOGLE: 'signUpOrLoginAdminByGoogle',
  USER_PROFILE: 'updateUser',
  GET_ALL_CATEGORIES: id =>
    id ? `getAllSubCategory?categoryId=${id}` : 'getAllSubCategory',
  GET_PROFILE: 'getProfile',
};
