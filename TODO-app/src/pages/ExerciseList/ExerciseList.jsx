import { useParams } from "react-router-dom";
import SmallCard from "../../components/Cards/SmallCard/SmallCard";

export default function ExerciseList() {
  const { exercise } = useParams();
  console.log(exercise);

  return (
    <div>
      <SmallCard />
      <SmallCard />
      <SmallCard />
      <SmallCard />
    </div>
  );
}
