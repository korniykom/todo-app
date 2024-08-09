/* eslint-disable react/prop-types */
import SmallCard from "../../components/Cards/SmallCard/SmallCard";

const warmupArms = {
  exercise1: {
    title: "Triceps flexibility",
    reps: "10",
  },
  exercise2: {
    title: "Biceps & Forearms flexibility",
    reps: "10",
  },
  exercise3: {
    title: "Neck flexibility",
    reps: "10",
  },
  exercise4: {
    title: "Shoulder flexibility",
    reps: "10",
  },
  exercise5: {
    title: "Chest flexibility",
    reps: "10",
  },
  exercise6: {
    title: "Abdominal mussle flexibility",
    reps: "10",
  },
  exercise7: {
    title: "Hips/Pelvis mussle flexibility",
    reps: "10",
  },
};
const armsExerciseLevel1 = {
  exercise1: {
    title: "Seated dumbbell overhead press",
    reps: "8-12 x 1",
  },
  exercise2: {
    title: "Seated dumbbell bicep curls with rotation",
    reps: "8-12 x 1",
  },
  exercise3: {
    title: "Lying wrist curls with underhand grip",
    reps: "8-12 x 1",
  },
  exercise4: {
    title: "Lying wrist curls with overhand grip",
    reps: "8-12 x 1",
  },
};
const armsExerciseLevel2 = {
  exercise1: {
    title: "One-arm triceps extension",
    reps: "8-12 x 1",
  },
  exercise2: {
    title: "Seated dumbbell overhead press",
    reps: "8-12 x 1",
  },
  exercise3: {
    title: "Seated dumbbell curls with straight bar path",
    reps: "8-12 x 1",
  },
  exercise4: {
    title: "Seated dumbbell curls with rotation",
    reps: "8-12 x 1",
  },
  exercise5: {
    title: "Lying wrist curls with underhand grip",
    reps: "8-12 x 1",
  },
  exercise6: {
    title: "Lying wrist curls with overhand grip",
    reps: "8-12 x 1",
  },
  exercise7: {
    title: "Dumbbell bench press",
    reps: "8-12 x 1",
  },
  exercise8: {
    title: "Dumbbell row",
    reps: "8-12 x 1",
  },
  exercise9: {
    title: "Seated dumbbell curls with rotation",
    reps: "8-12 x 1",
  },
};
export default function ArmsPage({ level = 2 }) {
  return (
    <>
      {Object.entries(warmupArms).map(([key, exercise]) => {
        return (
          <SmallCard key={key} title={exercise.title} reps={exercise.reps} />
        );
      })}

      {level === 1 && (
        <>
          {Object.entries(armsExerciseLevel1).map(([key, exercise]) => {
            return (
              <SmallCard
                key={key}
                title={exercise.title}
                reps={exercise.reps}
              />
            );
          })}
        </>
      )}
      {level === 2 && (
        <>
          {Object.entries(armsExerciseLevel2).map(([key, exercise]) => {
            return (
              <SmallCard
                key={key}
                title={exercise.title}
                reps={exercise.reps}
              />
            );
          })}
        </>
      )}
    </>
  );
}
