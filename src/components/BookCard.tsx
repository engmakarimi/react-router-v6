 type BookCardType = {
    title: string;
    status: string;
    authors: string[];
  };
const BookCard = ({title,status,authors}: BookCardType) => {
  return (
    <>
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{title}</h5>
        <small>{status}</small>
      </div>
      <span className="mb-1">authors: </span>
      {authors.map(p => <small key={p}>{p}-</small>)}
    </>
  );
};

export default BookCard;
