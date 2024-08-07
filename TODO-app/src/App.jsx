import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import ExerciseList from "./pages/ExerciseList/ExerciseList";
import PageNotFound from "./components/PageNotFound";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="exercises/:exercise" element={<ExerciseList />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
