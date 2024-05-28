import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
  const defaultUrl = "https://run.mocky.io";

  let api = axios.create({
    baseURL: defaultUrl,
    headers: {
      "Content-Type": "application/json",
      common: {},
    },
  });
  return {
    provide: {
      api: api,
    },
  };
});
