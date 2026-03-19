import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams();
  const books = useSelector((state) => state.books);

  const book = books.find((b) => b.id == id);

  if (!book) return <h2>Book not found</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{book.title}</h2>

      <img src={book.image} width="200" />

      <p><strong>Author:</strong> {book.author}</p>

      {/* ✅ Full description */}
      <p><strong>Description:</strong> {book.description}</p>

      <Link to="/books">Back to Browse</Link>
    </div>
  );
}

export default BookDetails;