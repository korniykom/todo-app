import CardList from "../../components/CardList/CardList";
import BigCard from "../../components/Cards/BigCard/BigCard";
import arms from "../../images/arms.jpg";
import chest from "../../images/chest.jpg";
import abs from "../../images/abs.jpg";

const Abs = {
  mussleGroup: "Abs",
  trainingDays: ["Monday", "Wednesday", "Friday"],
  duration: "15",
};

const Arms = {
  mussleGroup: "Arms",
  trainingDays: ["Monday", "Friday"],
  duration: "15",
};

const Chest = {
  mussleGroup: "Chest",
  trainingDays: ["Monday", "Friday"],
  duration: "15",
};

export default function MainPage() {
  const currentDay = new Date().getDay();
  console.log(Arms);
  console.log(Chest);
  return (
    <div>
      <CardList>
        {currentDay === (1 || 5) ? (
          <>
            <BigCard
              title={Arms.mussleGroup}
              subTitle={Arms.trainingDays}
              duration={Arms.duration}
              image={arms}
            />
            <BigCard
              title={Chest.mussleGroup}
              subTitle={Chest.trainingDays}
              duration={Chest.duration}
              image={chest}
            />
            <BigCard
              title={Abs.mussleGroup}
              subTitle={Abs.trainingDays}
              duration={Abs.duration}
              image={abs}
            />
          </>
        ) : currentDay === 3 ? (
          <BigCard
            title={Abs.mussleGroup}
            subTitle={Abs.trainingDays}
            duration={Abs.duration}
            image={abs}
          />
        ) : (
          <BigCard />
        )}
      </CardList>
    </div>
  );
}
