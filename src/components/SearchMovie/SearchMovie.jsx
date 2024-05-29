import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import css from "./SearchMovie.module.css";

export default function SearchMovie({ onSubmit }) {
  const handleSearchMovie = (event) => {
    const notify = () =>
      toast.error("The search field is empty. Please enter a search value", {
        duration: 3000,
        position: "top-right",
        style: {
          backgroundColor: "#fc1808",
          color: "#F9F902",
        },
      });
    event.preventDefault();
    const form = event.target;
    const query = form.search.value.trim();
    if (query === "") {
      notify();
    } else {
      onSubmit(query);
    }
    form.reset();
  };
  return (
    <div>
      <Toaster />
      <form className={css.form} onSubmit={handleSearchMovie}>
        <input
          className={css.input}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
