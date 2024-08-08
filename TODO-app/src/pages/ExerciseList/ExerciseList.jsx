import { useParams } from "react-router-dom";
import styles from "./ExerciseList.module.css";
import Score from "../../components/Score/Score";
import ArmsPage from "../ArmsPage/ArmsPage";

export default function ExerciseList() {
  const { exercise } = useParams();

  return (
    <>
      <div className={styles.container}>
        {exercise === "arms" && <ArmsPage />}
      </div>
      <Score currentValue="0" maxValue="10" />
    </>
  );
}
