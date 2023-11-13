import axios from 'axios';
import { getCookie, setCookie } from 'cookies-next';

export const API_URL = process.env.NEXT_PUBLIC_BASE_URL;

const axiosApi = axios.create({
  baseURL: API_URL
});

export const refreshAccessToken = (refresh) =>
  post('/token/refresh', { refresh });
let abortController = new AbortController();
axiosApi.interceptors.request.use(
  function (config) {
    const token =
      !!getCookie('token') &&
      getCookie('token') !== 'undefined' &&
      getCookie('token') !== 'null'
        ? JSON.parse(`${getCookie('token')}`)
        : '';
    config.signal = abortController.signal;
    if (token?.access_token) {
      config.headers['Authorization'] = token?.access_token
        ? `Bearer ${token?.access_token}`
        : '';
      return config;
    }
    return config;
  },
  (error) => {
    if (error.response.status === 401) {
      abortController.abort();
    }
    Promise.reject(error);
  }
);

axiosApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error?.response?.status === 406) {
      //   toast.error(error.response.data.message);
      window.location.href = '/auth/login';
      return;
    }
    if (error?.response?.status === 403 && !originalRequest._retry) {
      abortController.abort();
      originalRequest._retry = true;
      try {
        abortController = new AbortController();
        const token =
          !!getCookie('token') && getCookie('token') !== 'undefined'
            ? JSON.parse(`${getCookie('token')}`)
            : '';

        if (!token?.refresh_token) {
          window.location.href = '/auth/login';
          return;
        }
        const data = await refreshAccessToken(token?.refresh_token);
        setCookie('token', JSON.stringify(data));
        axiosApi.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${data.access}`;
        return axiosApi(originalRequest);
      } catch (error) {
        window.location.href = '/auth/login';
        setCookie('token', '');
        return;
      }
    }
    return Promise.reject(error);
  }
);

export async function get(url, config = {}) {
  return axiosApi.get(url, { ...config }).then((response) => response.data);
}

export async function post(url, data, config = {}) {
  return axiosApi
    .post(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function postFormData(url, data, config = {}) {
  return axiosApi
    .post(url, data, { ...config })
    .then((response) => response.data);
}

export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function putFormData(url, data, config = {}) {
  return axiosApi
    .put(url, data, { ...config })
    .then((response) => response.data);
}

export async function patch(url, data, config = {}) {
  return axiosApi
    .patch(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function del(url, config = {}) {
  return axiosApi.delete(url, { ...config }).then((response) => response.data);
}
