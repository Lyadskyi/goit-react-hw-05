import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../../pages/HomePage/HomePage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import css from "./App.module.css";

export default function App() {
  return (
    <>
      <Layout>
        <h1 className={css.heading}>Trending today</h1>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Layout>
    </>
  );
}
