import "./DayCard.css";
import chest from "../../img/chest.jpg";
import arms from "../../img/arms.jpg";
import abs from "../../img/abs.jpg";
import legs from "../../img/legs.jpg";
export default function DayCard({ mussleGroup = "none" }) {
  const cardStyle = {
    boxShadow: `0 0 4px 2px ${
      mussleGroup === "chest"
        ? "#38D9A9"
        : mussleGroup === "arms"
        ? "#15AABF"
        : mussleGroup === "abs"
        ? "#D6336C"
        : mussleGroup === "legs"
        ? "#15AABF"
        : ""
    }`,
    border: `0.3rem solid ${
      mussleGroup === "chest"
        ? "#38D9A9"
        : mussleGroup === "arms"
        ? "#15AABF"
        : mussleGroup === "abs"
        ? "#D6336C"
        : mussleGroup === "legs"
        ? "#6741d9"
        : ""
    }`,
    backgroundImage: `linear-gradient${
      mussleGroup === "chest"
        ? "(0deg, rgba(99,230,190,0.4) 0%, rgba(11,114,133,0.3) 100%)"
        : mussleGroup === "arms"
        ? "(0deg, rgba(112,72,232,0.4) 0%, rgba(11,114,133,0.2) 100%)"
        : mussleGroup === "abs"
        ? "(0deg, rgba(194,37,92,0.4) 0%, rgba(240,62,62,0.1) 100%)"
        : mussleGroup === "legs"
        ? "(0deg, rgba(103,65,217,0.2) 0%, rgba(59,91,219,0.1) 100%)"
        : ""
    },
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
      <div className="day-card" style={cardStyle}></div>
    </div>
  );
}
