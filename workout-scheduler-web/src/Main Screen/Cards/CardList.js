import DayCard from "./DayCard";
import "./CardList.css";

export default function CardList() {
  return (
    <div className="container">
      <DayCard mussleGroup="chest" />
      <DayCard mussleGroup="arms" />
      <DayCard mussleGroup="abs" />
      <DayCard mussleGroup="legs" />
    </div>
  );
}
