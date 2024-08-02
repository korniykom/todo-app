import { useEffect, useState } from "react";

export default function BigCard({ mussleGroup, img }) {
  const [exercise, setExercise] = useState({});
  useEffect(
    function () {
      async function fetchExercises() {
        const response = await fetch(
          `http://192.168.1.172:9040/${mussleGroup}`
        );
        setExercise(await response.json());
      }
      fetchExercises();
    },
    [mussleGroup]
  );
  return (
    <div className="card">
      <h2>{exercise.title}</h2>
      {/* {console.log(exercise.workoutDays)} */}
      <h4>{exercise.workoutDays?.join(" & ")}</h4>
      <img src={img} alt={exercise.title} />
      <div className="lower-card">
        <div>
          <h5>Duration</h5>
          <p>{exercise.duration} min</p>
        </div>
        <button>Start Workout</button>
      </div>
    </div>
  );
}
