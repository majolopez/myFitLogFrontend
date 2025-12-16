const API_URL = import.meta.env.VITE_API_URL;

export async function getHello() {
  const response = await fetch(`${API_URL}/hello`);

  if (!response.ok) {
    throw new Error("Error fetching /hello");
  }

  return response.json();
}
