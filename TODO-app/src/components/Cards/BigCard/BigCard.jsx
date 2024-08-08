/* eslint-disable react/prop-types */
import chillday from "../../../images/chillday.jpg";

import styles from "./BigCard.module.css";
export default function BigCard({
  image = chillday,
  title = "Chillday",
  subTitle = ["Today you need to rest"],
  duration = "Whole day",
}) {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subTitle}>{subTitle.join(" & ")}</h2>
      <img className={styles.image} src={image} alt="img" />
      <div className={styles.lowerCard}>
        <div className={styles.duration}>
          <h3 className={styles.durationTitle}>Duration</h3>
          <h4 className={styles.durationSubTitle}>
            {duration} {title === "Chillday" ? "" : "min"}
          </h4>
        </div>
        <button>{title === "Chillday" ? "Chill out" : "Start workout"}</button>
      </div>
    </div>
  );
}
