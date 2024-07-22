import DayCard from "./DayCard";
import "./CardList.css";

export default function CardList() {
  return (
    <div className="container">
      <DayCard color="#63e6be" mussleGroup="chest" />
      <DayCard color="#e64980" mussleGroup="arms" />
      <DayCard color="#22b8cf" mussleGroup="abs" />
      <DayCard color="#63e6be" mussleGroup="legs" />
    </div>
  );
}
