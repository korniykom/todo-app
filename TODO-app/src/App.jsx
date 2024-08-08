import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import ExerciseList from "./pages/ExerciseList/ExerciseList";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import { useState } from "react";

function App() {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Header
          sideBarIsOpen={sideBarIsOpen}
          setSideBarIsOpen={setSideBarIsOpen}
        />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="exercises/:exercise" element={<ExerciseList />} />
          <Route path="sidebar" element={<SideBar />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
