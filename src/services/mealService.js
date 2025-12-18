const API_URL = import.meta.env.VITE_API_URL;


export async function getMeals(userId) {
  const response = await fetch(
    `${API_URL}/user/${userId}/meals`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Error fetching meals");
  }

  return await response.json();
}

export async function addMeal(userId, meal) {
  const response = await fetch(
    `${API_URL}/user/${userId}/meals`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(meal),
    }
  );

  if (!response.ok) {
    throw new Error("Error adding meal");
  }

  return await response.json();
}
