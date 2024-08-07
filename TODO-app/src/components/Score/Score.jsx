/* eslint-disable react/prop-types */
import styles from "./Score.module.css";
export default function Score({ currentValue, maxValue }) {
  return (
    <p className={styles.score}>
      {currentValue}/{maxValue}
    </p>
  );
}
