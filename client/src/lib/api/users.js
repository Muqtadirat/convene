const apiUrl = import.meta.env.VITE_POSTMAN_API_URL;

export default async function FetchUsers(method = "GET", userData = {}) {
  try {
    // const res = await fetch("http://localhost:8080/v1/users"); //Backend url
    // const res = await fetch(`${apiUrl}users`);
    // const data = res.json();
    // return data;
    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (method === "POST") {
      options.body = JSON.stringify(userData);
    }

    const res = await fetch(`${apiUrl}users`, options);

    if (method === "GET") {
      const data = await res.json();
      return data;
    } else {
      if (res.ok) {
        console.log("User data updated successfully");
        return await res.json();
      } else {
        console.error("Failed to update user data");
      }
    }
  } catch (error) {
    console.error("Error fetching data...");
    throw error;
  }
}
