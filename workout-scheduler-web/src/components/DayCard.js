import "./DayCard.css";
import chest from "../img/chest.jpg";
import arms from "../img/arms.jpg";
import abs from "../img/abs.jpg";
import legs from "../img/legs.jpg";
export default function DayCard({ color = "yellow", mussleGroup = "none" }) {
  const cardStyle = {
    boxShadow: `0 0 4px 2px ${color}`,
    border: `0.3rem solid ${color}`,
    backgroundImage: `linear-gradient(rgba(79, 79, 79, 0.5), rgba(0, 0, 0, 0.5)),
    url(${
      mussleGroup === "chest"
        ? chest
        : mussleGroup === "arms"
        ? arms
        : mussleGroup === "abs"
        ? abs
        : mussleGroup === "legs"
        ? legs
        : ""
    })`,
  };
  const headerStyle = {
    color,
  };

  return (
    <div className="conteiner">
      <h2 style={headerStyle}>
        {mussleGroup[0].toUpperCase() + mussleGroup.slice(1)} day
      </h2>
      <div className="day-card" style={cardStyle}></div>
    </div>
  );
}
