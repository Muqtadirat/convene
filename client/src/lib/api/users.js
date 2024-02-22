const apiUrl = import.meta.env.VITE_POSTMAN_API_URL;

export default async function FetchUsers() {
  try {
    // const res = await fetch("http://localhost:8080/v1/users"); //Backend url
    const res = await fetch(`${apiUrl}users`);
    const data = res.json();

    return data;
  } catch (error) {
    console.error("Error fetching data...");
  }
}
