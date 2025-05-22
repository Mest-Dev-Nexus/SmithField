import { apiClient } from "./config";

export const apiCreatePost = async (payload) => {
    return apiClient.post("/create-post", payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  export const apiGetAllProducts = async () => apiClient.get("/get/products");

  export const apiGetAllDocs = async () => apiClient.get("/patient/alldocs");

export const apiGetPost = async () => apiClient.get("/");

export const apiPostById = async (id) =>
  apiClient.get(`/feed/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

export const apiUpdate = async (id, payload) =>
  apiClient.patch(`/adverts/${id}`, payload);

export const apiGetSinglePost = async (id) => apiClient.get(`/adverts/${id}`);

export const apiDeleteVendorPosttById = async (id) =>
  apiClient.delete(`/adverts/${id}`);
