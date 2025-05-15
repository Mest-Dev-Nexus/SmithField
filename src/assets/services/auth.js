import { apiClient } from "./config";

export const apiSignup = async (payload) => {
  return apiClient.post("/signup", payload);
};

export const apiLogin = async (payload) => {
  return apiClient.post("/login", payload);
};

export const loginShopper = async (credentials) => {
  // Shopper login logic
};

export const loginWholesale = async (businessCredentials) => {
  // Wholesale login logic
};