/* eslint-disable react/prop-types */
import styles from "./SmallCard.module.css";
export default function SmallCard({ image }) {
  return (
    <div className={styles.smallCard}>
      <div className={styles.subContainer}>
        <img className={styles.image} src={image} />
        <div className={styles.subSubContainer}>
          <h4>Pull ups</h4>
          <h5>8-12 reps</h5>
        </div>
      </div>
      <input className={styles.checkbox} type="checkbox" />
    </div>
  );
}
