import { useParams } from "react-router-dom";

export default function ExerciseList() {
  const { exercise } = useParams();
  console.log(exercise);

  return <div> Exercise</div>;
}
