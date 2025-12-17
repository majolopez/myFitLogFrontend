import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCalorieProfile } from "../services/userService";
import styles from "./CalorieProfilePage.module.css";




export default function CalorieProfilePage() {
  const { userId } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        console.log("Fetching calorie profile for userId:", userId);
        const response = await getCalorieProfile(userId);
        setData(response);
      } catch (err) {
        setError("Failed to load calorie profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Calculating your profile...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Your Calorie Profile</h1>
        <p className={styles.subtitle}>Based on your personal data</p>
      </div>

      <div className={styles.card}>
        <div className={styles.grid}>
          <Metric label="Daily Calories: " value={`${data.daily_calories} kcal`} />
          <Metric label="Protein: " value={`${data.protein} g`} />
          <Metric label="Carbs: " value={`${data.carbs} g`} />
          <Metric label="Fat: " value={`${data.fat} g`} />
        </div>
      </div>
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div className={styles.metric}>
      <span className={styles.metricLabel}>{label}</span>
      <span className={styles.metricValue}>{value}</span>
    </div>
  );
}
