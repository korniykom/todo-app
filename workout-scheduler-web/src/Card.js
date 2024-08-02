export default function BigCard({ title, subtitle, img, duration = 15 }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <h4>{subtitle}</h4>
      <img src={img} alt={title} />
      <div className="lower-card">
        <div>
          <h5>Duration</h5>
          <p>{duration} min</p>
        </div>
        <button>Start Workout</button>
      </div>
    </div>
  );
}
