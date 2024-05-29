import { Suspense } from "react";
import { TbWorldDownload } from "react-icons/tb";
import Navigation from "../Navigation/Navigation";
import css from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <Navigation />
      <Suspense
        fallback={
          <>
            <TbWorldDownload size={20} /> Wait for the movie search
          </>
        }
      >
        {children}
      </Suspense>
    </div>
  );
}
