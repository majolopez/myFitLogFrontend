import js from "@eslint/js";

const API_URL = import.meta.env.VITE_API_URL;

export async function createUserProfile(data) {
  const response = await fetch(
    `${API_URL}/user`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error("Error creating user profile");
  }

  return response.json();
}

export async function getCalorieProfile(userId) {
  const response = await fetch(
    `${API_URL}/user/${userId}/calorie_profile`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }
  );


  if (!response.ok) {
    throw new Error("Error creating user profile");
  }

  return response.json();
}