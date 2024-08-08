import styles from "./SideBar.module.css";
export default function SideBar() {
  return (
    <div className={styles.screen}>
      <ul>
        <li>Warm up</li>
        <li>Abs</li>
        <li>Arms</li>
        <li>Legs</li>
        <li>Chest</li>
      </ul>
    </div>
  );
}
