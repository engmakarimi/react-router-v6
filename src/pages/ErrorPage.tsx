import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  let error = useRouteError() as any;
  console.log(error);
  return (
    <div className="container ">
      <div className="row vh-100">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <div className="card col-5 text-center pt-5">
          <h1> oops ......</h1>
          <h2>{error.statusText}</h2>
          <h1>{error.status}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
