import BigCard from "./Card";
import arms from "./img/arms.jpg";
import chest from "./img/chest.jpg";
import legs from "./img/legs.jpg";
import abs from "./img/abs.jpg";

export default function Main() {
  return (
    <div className="card-list">
      <BigCard title={"Arms"} subtitle={"Monday & Friday"} img={arms} />
      <BigCard title={"Legs"} subtitle={"Monday & Friday"} img={legs} />
      <BigCard title={"Abs"} subtitle={"Monday & Friday"} img={abs} />
      <BigCard title={"Chest"} subtitle={"Monday & Friday"} img={chest} />
    </div>
  );
}
