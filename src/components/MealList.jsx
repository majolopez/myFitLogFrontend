import { useState } from "react";
import styles from "../pages/AddMealPage.module.css";

export default function MealList({ meals }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={styles.mealList}>
      {meals.map((meal, index) => (
        <div key={meal.id ?? index} className={styles.accordionItem}>
          
          <div
            className={styles.accordionHeader}
            onClick={() => toggle(index)}
          >
            <div className={styles.headerLeft}>
              <span className={styles.mealName}>{meal.name}</span>
            </div>

            <div className={styles.headerRight}>
              <span className={styles.calories}>
                {meal.calories} kcal
              </span>
            </div>
          </div>

          {expandedIndex === index && (
            <div className={styles.accordionContent}>
              <p className={styles.description}>{meal.description}</p>

              <div className={styles.macros}>
                <div>
                  <span className={styles.macroLabel}>Protein </span>
                  <span className={styles.macroValue}>
                    {meal.protein} g
                  </span>
                </div>

                <div>
                  <span className={styles.macroLabel}>Carbs </span>
                  <span className={styles.macroValue}>
                     {meal.carb} g
                  </span>
                </div>

                <div>
                  <span className={styles.macroLabel}>Fat </span>
                  <span className={styles.macroValue}>
                    {meal.fat} g
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
