import { useMemo } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { getBooks } from "../api";
import { BookCard } from "../components";
import { isActiveRoute } from "../helpers";

const BooksPage = () => {
  const { category } = useParams();

  let bookList = useMemo(() => {
    if (category) return getBooks(category);
  }, [category]);
  return (
    <section className="row">
      <div className="col-4">
        {bookList && (
          <div className="list-group">
            {bookList.map((p) => {
              return (
                <NavLink
                  className={`list-group-item list-group-item-action ${isActiveRoute}`}
                  to={`${p._id}`}
                  key={p._id}
                >
                  <BookCard
                    title={p.title}
                    authors={p.authors}
                    status={p.status}
                  ></BookCard>
                </NavLink>
              );
            })}
          </div>
        )}
      </div>
      <div className="col-8">
        <Outlet />
      </div>
    </section>
  );
};

export default BooksPage;
