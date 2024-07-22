import DayCard from "./DayCard";
import "./CardList.css";

export default function CardList() {
  return (
    <div className="container">
      <DayCard color="#63e6be" />
      <DayCard color="#e64980" />
      <DayCard color="#22b8cf" />
      <DayCard color="#63e6be" />
      <DayCard color="#e64980" />
      <DayCard color="#63e6be" />
      <DayCard color="#22b8cf" />
    </div>
  );
}
