import Main from "./Main";
import Nav from "./Nav";
export default function App() {
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
  return (
    <div>
      <Nav day={currentDayOfTheWeek} />
      <Main />
    </div>
  );
}
