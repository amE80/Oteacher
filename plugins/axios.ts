import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
  const defaultUrl = import.meta.env.NUXT_PUBLIC_API_BASE

  let api = axios.create({
    baseURL: defaultUrl,
    headers: {
      common: {},
    },
  });
return {
    provide: {
      api: api,
    },
  };
});