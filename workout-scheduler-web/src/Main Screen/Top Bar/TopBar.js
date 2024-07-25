import "./TopBar.css";
import { useState } from "react";
export default function TopBar() {
  const daysOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thurday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const currentDate = new Date();
  const [difficulty, setDifficulty] = useState("easy");

  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <p>Difficulty: </p>
        <select
          value={difficulty}
          onChange={(e) => {
            console.log(e.target.value);
            setDifficulty(e.target.value);
          }}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div className="top-bar-right">
        <span>
          {`${daysOfTheWeek[currentDate.getDay() - 1]} ${
            currentDate.getDay() === (1 || 5) ? "(Chest & Arms Day)" : ""
          } `}
        </span>
      </div>
    </div>
  );
}
