import axios from "axios";

export const getQuotes = async () => {
  try {
    const response = await axios.get("https://api.api-ninjas.com/v1/quotes", {
      headers: {
        "X-Api-Key": import.meta.env.VITE_API_NINJAS_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
