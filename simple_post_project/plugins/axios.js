import config from "@/config";

export default function ({ $axios, redirect, $toast, $auth, $store }, inject) {
  const baseApi = $axios.create({
    baseURL: config.apiUrl,
    credentials: true,
  });

  inject("baseApi", baseApi);
}
