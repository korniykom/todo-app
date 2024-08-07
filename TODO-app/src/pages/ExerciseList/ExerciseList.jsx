import { useParams } from "react-router-dom";
import SmallCard from "../../components/Cards/SmallCard/SmallCard";
import arms from "/home/max/workout-scheduler/TODO-app/src/images/arms.jpg";
import styles from "./ExerciseList.module.css";
import Score from "../../components/Score";

export default function ExerciseList() {
  const { exercise } = useParams();
  console.log(exercise);

  return (
    <>
      <div className={styles.container}>
        <SmallCard image={arms} />
        <SmallCard image={arms} />
        <SmallCard image={arms} />
        <SmallCard image={arms} />
        <SmallCard image={arms} />
        <SmallCard image={arms} />
        <SmallCard image={arms} />
        <SmallCard image={arms} />
        <SmallCard image={arms} />
        <SmallCard image={arms} />
        <SmallCard image={arms} />
        <SmallCard image={arms} />
        <SmallCard image={arms} />
      </div>
      <Score currentValue="0" maxValue="10" />
    </>
  );
}
