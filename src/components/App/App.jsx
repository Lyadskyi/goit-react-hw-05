import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import AboutPage from "../../pages/AboutPage/AboutPage";
import Navigation from "../Navigation/Navigation";

export default function App() {
  return (
    <>
      <h1>Trending today</h1>

      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
    </>
  );
}
