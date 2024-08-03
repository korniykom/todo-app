import BigCard from "./BigCard";
import arms from "./img/arms.jpg";
import chest from "./img/chest.jpg";
import legs from "./img/legs.jpg";
import abs from "./img/abs.jpg";
import BurgerMenu from "./BurgerMenu";

export default function Main() {
  return (
    <div className="card-list">
      <BigCard mussleGroup={"Arms"} img={arms} />
      <BigCard mussleGroup={"Abs"} img={abs} />
      <BigCard mussleGroup={"Chest"} img={chest} />
    </div>
  );
}
