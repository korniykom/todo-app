/* eslint-disable react/prop-types */
import SmallCard from "../../components/Cards/SmallCard/SmallCard";
import armsWarmup1 from "../../images/arms-warmup1.png";
import armsWarmup2 from "../../images/arms-warmup2.png";
import armsWarmup31 from "../../images/arms-warmup3.1.png";
import armsWarmup32 from "../../images/arms-warmup3.2.png";
import armsWarmup33 from "../../images/arms-warmup3.3.png";
import armsWarmup4 from "../../images/arms-warmup4.png";
import armsWarmup5 from "../../images/arms-warmup5.png";
import armsWarmup6 from "../../images/arms-warmup6.png";
import armsWarmup7 from "../../images/arms-warmup7.png";
import armsLevel11 from "../../images/armsLevel11.png";
import armsLevel12 from "../../images/armsLevel12.png";
import armsLevel13 from "../../images/armsLevel13.png";
import armsLevel14 from "../../images/armsLevel14.png";

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
export default function ArmsPage({ level = 1 }) {
  return (
    <div>
      <SmallCard
        image={armsWarmup1}
        title={warmupArms.exercise1.title}
        reps={warmupArms.exercise1.reps}
      />
      <SmallCard
        image={armsWarmup2}
        title={warmupArms.exercise2.title}
        reps={warmupArms.exercise2.reps}
      />
      <SmallCard
        image={armsWarmup31}
        title={warmupArms.exercise3.title}
        reps={warmupArms.exercise3.reps}
      />
      <SmallCard
        image={armsWarmup32}
        title={warmupArms.exercise3.title}
        reps={warmupArms.exercise3.reps}
      />
      <SmallCard
        image={armsWarmup33}
        title={warmupArms.exercise3.title}
        reps={warmupArms.exercise3.reps}
      />
      <SmallCard
        image={armsWarmup4}
        title={warmupArms.exercise4.title}
        reps={warmupArms.exercise4.reps}
      />{" "}
      <SmallCard
        image={armsWarmup5}
        title={warmupArms.exercise5.title}
        reps={warmupArms.exercise5.reps}
      />{" "}
      <SmallCard
        image={armsWarmup6}
        title={warmupArms.exercise6.title}
        reps={warmupArms.exercise6.reps}
      />
      <SmallCard
        image={armsWarmup7}
        title={warmupArms.exercise7.title}
        reps={warmupArms.exercise7.reps}
      />
      {level === 1 && (
        <>
          <SmallCard
            image={armsLevel11}
            title={armsExerciseLevel1.exercise1.title}
            reps={armsExerciseLevel1.exercise1.reps}
          />{" "}
          <SmallCard
            image={armsLevel12}
            title={armsExerciseLevel1.exercise1.title}
            reps={armsExerciseLevel1.exercise2.reps}
          />{" "}
          <SmallCard
            image={armsLevel13}
            title={armsExerciseLevel1.exercise3.title}
            reps={armsExerciseLevel1.exercise3.reps}
          />{" "}
          <SmallCard
            image={armsLevel14}
            title={armsExerciseLevel1.exercise4.title}
            reps={armsExerciseLevel1.exercise4.reps}
          />
        </>
      )}
      {level === 2 && (
        <>
          <SmallCard
            image={armsLevel11}
            title={armsExerciseLevel2.exercise1.title}
            reps={armsExerciseLevel2.exercise1.reps}
          />
          <SmallCard
            image={armsLevel12}
            title={armsExerciseLevel1.exercise1.title}
            reps={armsExerciseLevel1.exercise2.reps}
          />{" "}
          <SmallCard
            image={armsLevel13}
            title={armsExerciseLevel1.exercise3.title}
            reps={armsExerciseLevel1.exercise3.reps}
          />{" "}
          <SmallCard
            image={armsLevel14}
            title={armsExerciseLevel1.exercise4.title}
            reps={armsExerciseLevel1.exercise4.reps}
          />
        </>
      )}
    </div>
  );
}
