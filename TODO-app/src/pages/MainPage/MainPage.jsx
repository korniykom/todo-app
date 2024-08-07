import BigCard from "../../components/Cards/BigCard/BigCard";
import CardList from "./CardList/CardList";
import arms from "/home/max/workout-scheduler/TODO-app/src/images/arms.jpg";

export default function MainPage() {
  return (
    <div className="test">
      <CardList>
        <BigCard image={arms} />
        <BigCard image={arms} />
        <BigCard image={arms} />
        <BigCard image={arms} />
        <BigCard image={arms} />
        <BigCard image={arms} />
      </CardList>
    </div>
  );
}
