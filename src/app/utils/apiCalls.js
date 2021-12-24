/* eslint-disable no-unused-vars */
import { fetchCall } from '../utils/ajax';
import { API_CONSTANTS, API_METHODS } from '../constants/api-constant';

export const getCategoryDetails = (callback, payload) => {
    const url = `${API_CONSTANTS.CATEGORY_DETAILS}`;
    return fetchCall((response) => {
      callback(response);
    }, url, API_METHODS.GET, payload);
  };
  
  export const getMenuDetails = (callback, payload) => {
    const url = `${API_CONSTANTS.MENU_DETAILS}`;
    return fetchCall((response) => {
      callback(response);
    }, url, API_METHODS.GET, payload);
  };

  export const getPostList = (callback, payload) => {
    const url = `${API_CONSTANTS.POST_LIST}`;
    return fetchCall((response) => {
      callback(response);
    }, url, API_METHODS.GET, payload);
  };

  export const adminRegistartion = (callback, payload) => {
    const url = `${API_CONSTANTS.ADMIN_REGISTRATION}`;
    return fetchCall((response) => {
      callback(response);
    }, url, API_METHODS.POST, payload);
  };

  export const getRegistrationDetails = (callback, payload) => {
    const url = `${API_CONSTANTS.GET_REGISTRATION}`;
    return fetchCall((response) => {
      callback(response);
    }, url, API_METHODS.GET, payload);
  };

  export const adminLogin = (callback, payload) => {
    const url = `${API_CONSTANTS.ADMIN_LOGIN}`;
    return fetchCall((response) => {
      callback(response);
    }, url, API_METHODS.POST, payload);
  };
