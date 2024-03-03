import axios from "axios";
// const apiUrl = import.meta.env.VITE_POSTMAN_API_URL;
const apiUrl = import.meta.env.VITE_BACKEND_API_URL;

export default async function loginUser(userData) {
  try {
    const res = await axios.post(`${apiUrl}users/login`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
}
