import { useState } from "react";
import { addMeal } from "../services/mealService";
import styles from "../pages/AddMealPage.module.css";

export default function MealForm({ userId, onAdd }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !description) return;

    setLoading(true);
    try {
      const meal = await addMeal(userId, { name, description });
      onAdd(meal);
      setName("");
      setDescription("");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        placeholder="Meal Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        className={styles.textarea}
        placeholder="Meal Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" className={styles.button} disabled={loading}>
        {loading ? "Adding..." : "Add Meal"}
      </button>
    </form>
  );
}
