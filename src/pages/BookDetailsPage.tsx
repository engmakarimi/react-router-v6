import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { getBookDetails } from "../api";

const BookDetailsPage = () => {
  const { bookId } = useParams();

  let bookDetails = useMemo(() => {
    if (bookId) return getBookDetails(bookId);
   
  }, [bookId]);
  return (
    <div className="col-12">
      <div className="card col-12">
        {bookDetails && (
          <div className="card-body">
            <h5 className="card-title">{bookDetails.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {bookDetails.authors.join(',')}
            </h6>
            <p className="card-text">{bookDetails.longDescription}</p>
            <div className="d-flex justify-content-between">
              <span>
                <strong className="card-link">isbn : </strong>
                <span>{bookDetails.isbn}</span>
              </span>
              <span>
                <strong className="card-link">pageCount : </strong>
                <span>{bookDetails.pageCount}</span>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDetailsPage;
