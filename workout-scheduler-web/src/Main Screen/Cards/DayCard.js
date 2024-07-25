import "./DayCard.css";
import chest from "../../img/chest.jpg";
import arms from "../../img/arms.jpg";
import abs from "../../img/abs.jpg";
import legs from "../../img/legs.jpg";
export default function DayCard({ mussleGroup = "none" }) {
  return (
    <div className="conteiner">
      <h2
        className={`${
          mussleGroup === "chest"
            ? "chest"
            : mussleGroup === "arms"
            ? "arms"
            : mussleGroup === "abs"
            ? "abs"
            : mussleGroup === "legs"
            ? "legs"
            : ""
        }`}
      >
        {mussleGroup[0].toUpperCase() + mussleGroup.slice(1)} day
      </h2>
      <div
        className={`day-card ${
          mussleGroup === "chest"
            ? "chest"
            : mussleGroup === "arms"
            ? "arms"
            : mussleGroup === "abs"
            ? "abs"
            : mussleGroup === "legs"
            ? "legs"
            : ""
        }`}
      >
        <img
          src={
            mussleGroup === "chest"
              ? chest
              : mussleGroup === "arms"
              ? arms
              : mussleGroup === "abs"
              ? abs
              : mussleGroup === "legs"
              ? legs
              : ""
          }
          alt={
            mussleGroup === "chest"
              ? chest
              : mussleGroup === "arms"
              ? arms
              : mussleGroup === "abs"
              ? abs
              : mussleGroup === "legs"
              ? legs
              : ""
          }
        ></img>
      </div>
    </div>
  );
}
