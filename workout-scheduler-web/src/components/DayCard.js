import "./DayCard.css";
import img from "../img/Untitled.png";
export default function DayCard({ color = "yellow" }) {
  const cardStyle = {
    boxShadow: `0 0 4px 2px ${color}`,
    border: `0.3rem solid ${color}`,
    backgroundImage: `linear-gradient(rgba(79, 79, 79, 0.5), rgba(0, 0, 0, 0.5)),
    url(${img})`,
  };
  const headerStyle = {
    color,
  };

  return (
    <div className="conteiner">
      <h2 style={headerStyle}>Abs day</h2>
      <div className="day-card" style={cardStyle}></div>
    </div>
  );
}
