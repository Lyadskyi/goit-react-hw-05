import { MdOutlineRestorePage } from "react-icons/md";
import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.container}>
      <MdOutlineRestorePage size={20} color="#f60401" />
      <p className={css.notFound}>Sorry. Page not found!</p>
      <p className={css.backHome}>
        Please visit out <Link to="/">home page</Link>
      </p>
    </div>
  );
}
