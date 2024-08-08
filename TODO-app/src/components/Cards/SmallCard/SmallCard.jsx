/* eslint-disable react/prop-types */
import styles from "./SmallCard.module.css";
export default function SmallCard({ image, title, reps }) {
  return (
    <div className={styles.smallCard}>
      <div className={styles.subContainer}>
        <img className={styles.image} src={image} />
        <div className={styles.subSubContainer}>
          <h4>{title}</h4>
          <h5>{reps} </h5>
        </div>
      </div>
      <input className={styles.checkbox} type="checkbox" />
    </div>
  );
}
