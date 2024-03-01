import axios from "axios";
const apiUrl = import.meta.env.VITE_POSTMAN_API_URL;

export default async function registerUser(userData) {
  try {
    const response = await axios.post(`${apiUrl}users/signup`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error uploading user data", error);
    throw error;
  }
}
