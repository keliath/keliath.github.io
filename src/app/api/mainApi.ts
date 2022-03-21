import axios from "axios";

const baseUrl = process.env.REACT_APP_APIURL;

/**
 * Instancia de Axios para la API principal
 * @return {AxiosInstance}
 */
const mainApi = axios.create();

mainApi.interceptors.request.use(
  async function (config) {
    config.baseURL = process.env.REACT_APP_APIURL;

    // const apikey = process.env.REACT_APP_APIKEY || "";

    config.headers = {
      ...config.headers,
      // apikey,
    };

    return config;
  },
  function (error: any) {
    return Promise.reject(error);
  }
);

mainApi.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger

    return response;
  },
  function (error: any) {
    // console.log(error);
    // let errorMessage = "";

    // if (error.response) {
    //   if (Array.isArray(error.response.data.detail)) {
    //     errorMessage = error.response.data.detail.join(" ");
    //   }

    //   errorMessage = error.response.data.detail;
    // } else {
    //   errorMessage = error.message;
    // }

    return Promise.reject(error);
  }
);

export { mainApi, baseUrl };
