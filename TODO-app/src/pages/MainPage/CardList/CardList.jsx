/* eslint-disable react/prop-types */
import styles from "./CardList.module.css";
export default function CardList({ children }) {
  return <div className={styles.cardList}>{children}</div>;
}
