import axios from "axios";

const API_BASE_URL = "https://your-api-endpoint.com/api";

export const fetchSubscriptionPackages = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/subscriptions`);
    return response.data;
  } catch (error) {
    console.error("Error fetching subscription packages:", error);
    throw error;
  }
};

export const createSubscription = async (subscriptionData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/subscriptions`, subscriptionData);
    return response.data;
  } catch (error) {
    console.error("Error creating subscription:", error);
    throw error;
  }
};