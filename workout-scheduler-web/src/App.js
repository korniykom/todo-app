import { useState } from "react";
import Main from "./Main";
import Nav from "./Nav";
import BurgerMenu from "./BurgerMenu";
export default function App() {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDayOfTheWeek = dayNames[new Date().getDay()];
  function handleBurgerMenu() {
    setOpenBurgerMenu((openBurgerMenu) => {
      return !openBurgerMenu;
    });
  }

  return (
    <div>
      <Nav
        day={currentDayOfTheWeek}
        handleBurgerMenu={handleBurgerMenu}
        openBurgerMenu={openBurgerMenu}
      />
      {openBurgerMenu && <BurgerMenu />}

      <Main />
    </div>
  );
}
