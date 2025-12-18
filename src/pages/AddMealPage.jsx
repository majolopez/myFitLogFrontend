import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MealForm from "../components/MealForm";
import MealList from "../components/MealList";
import { getMeals } from "../services/mealService";
import styles from "./pages.module.css";

export default function AddMealPage() {
  const { userId } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMeals() {
      try {
        const data = await getMeals(userId);
        setMeals(data);
      } catch (error) {
        console.error("Error loading meals", error);
      } finally {
        setLoading(false);
      }
    }

    loadMeals();
  }, [userId]);

  const handleAddMeal = (meal) => {
    setMeals((prev) => [meal, ...prev]);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Add a Meal</h1>

      <MealForm userId={userId} onAdd={handleAddMeal} />

      {loading ? (
        <p>Loading meals...</p>
      ) : (
        <MealList meals={meals} />
      )}
    </div>
  );
}
