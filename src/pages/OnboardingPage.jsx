import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserProfile } from "../services/userService";
import styles from "./OnboardingPage.module.css";

export default function OnboardingPage() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        age: "",
        weight: "",
        height: "",
        activity_level: "",
        goal: "",
        sex: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({
        ...form,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
        const response = await createUserProfile(form);
        console.log(response);
        navigate(`/calorie-profile/${response.id}`);
        } catch (error) {
        console.error(error);
        } finally {
        setLoading(false);
        }
    };

    const isDisabled =
        !form.age ||
        !form.weight ||
        !form.height ||
        !form.activity_level ||
        !form.goal;

    return (
        <div className={styles.container}>
        <div className={styles.card}>
            <h1 className={styles.title}>Configura tu perfil</h1>
            <p className={styles.subtitle}>Esto solo toma 1 minuto</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
            <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            />

            <input
            className={styles.input}
            type="number"
            name="age"
            placeholder="Age (years)"
            value={form.age}
            onChange={handleChange}
            />

            <input
            className={styles.input}
            type="number"
            name="weight"
            placeholder="Weight (kg)"
            value={form.weight}
            onChange={handleChange}
            />

            <input
            className={styles.input}
            type="number"
            name="height"
            placeholder="Height (cm)"
            value={form.height}
            onChange={handleChange}
            />

            <select
            className={`${styles.input} ${styles.select}`}
            name="sex"
            value={form.sex}
            onChange={handleChange}
            >
            <option value="">Sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            </select>

            <select
            className={`${styles.input} ${styles.select}`}
            name="activity_level"
            value={form.activity_level}
            onChange={handleChange}
            >
            <option value="">Activity Level</option>
            <option value="sedentary">Sedentary</option>
            <option value="light">Light</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
            <option value="athlete">Athlete</option>
            </select>

            <div className={styles.card}>
            <div className={styles.buttonGroup}>
                {["lose_fat", "maintain", "gain_muscle"].map((goal) => (
                <button
                    type="button"
                    key={goal}
                    className={`${styles.button} ${
                    form.goal === goal ? styles.buttonActive : ""
                    }`}
                    onClick={() => setForm({ ...form, goal })}
                >
                    {goal === "lose_fat" && "Lose fat"}
                    {goal === "maintain" && "Maintain"}
                    {goal === "gain_muscle" && "Gain muscle"}
                </button>
                ))}

                <button
                type="submit"
                disabled={isDisabled || loading}
                className={`${styles.button} ${styles.buttonPrimary}`}
                >
                {loading ? "Calculating..." : "Calculate my calories"}
                </button>
            </div>
            </div>
        </form>
        </div>
  );
}
