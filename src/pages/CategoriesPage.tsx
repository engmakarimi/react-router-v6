import { useMemo } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { getCatagoriesName } from "../api";
import { isActiveRoute } from "../helpers";

const CategoriesPage = () => {
  let categoryList = useMemo(() => {
    return getCatagoriesName();
  }, []);

  return (
    <section className="row m-3">
      <div className="col-3">
        <div className="list-group">
          {categoryList.map((p) => (
            <NavLink
              className={`list-group-item list-group-item-action ${isActiveRoute}`}
              to={p}
              key={p}
            >
              {p}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="col-9 ">
        <Outlet />
      </div>
    </section>
  );
};

export default CategoriesPage;
