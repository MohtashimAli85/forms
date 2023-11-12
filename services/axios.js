import axios from 'axios';
// import { toast } from 'react-toastify';

export const API_URL = process.env.NEXT_PUBLIC_BASE_URL;

const axiosApi = axios.create({
  baseURL: API_URL
});

export const refreshAccessToken = (refresh_token) =>
  post('/auth/refresh', { refresh_token });
let abortController = new AbortController();
// axiosApi.interceptors.request.use(
//   function (config) {
//     const token =
//       !!Cookies.get('authToken') &&
//       Cookies.get('authToken') !== 'undefined' &&
//       Cookies.get('authToken') !== 'null'
//         ? JSON.parse(`${Cookies.get('authToken')}`)
//         : '';
//     config.signal = abortController.signal;
//     config.headers['Authorization'] = token?.accessToken
//       ? `Bearer ${token?.accessToken}`
//       : '';
//     return config;
//   },
//   (error) => {
//     if (error.response.status === 401) {
//       abortController.abort();
//     }
//     Promise.reject(error);
//   }
// );

// axiosApi.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;
//     if (error?.response?.status === 406) {
//       //   toast.error(error.response.data.message);
//       window.location.href = '/auth/login';
//       return;
//     }
//     if (error?.response?.status === 401 && !originalRequest._retry) {
//       abortController.abort();
//       originalRequest._retry = true;
//       try {
//         abortController = new AbortController();
//         const token =
//           !!Cookies.get('authToken') && Cookies.get('authToken') !== 'undefined'
//             ? JSON.parse(`${Cookies.get('authToken')}`)
//             : '';

//         if (!token?.refreshToken) {
//           window.location.href = '/auth/login';
//           return;
//         }
//         const data = await refreshAccessToken(token?.refreshToken);
//         Cookies.set('authToken', JSON.stringify(data));
//         axiosApi.defaults.headers.common[
//           'Authorization'
//         ] = `Bearer ${data.accessToken}`;
//         return axiosApi(originalRequest);
//       } catch (error) {
//         window.location.href = '/auth/login';
//         Cookies.remove('authToken');
//         return;
//       }
//     }
//     return Promise.reject(error);
//   }
// );

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
