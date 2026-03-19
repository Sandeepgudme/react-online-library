import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  const books = useSelector((state) => state.books);

  return (
    <>
      <Navbar />

      <h1>Welcome to Online Library</h1>

      {/* ✅ Categories (required) */}
      <h3>Categories</h3>
      <div className="categories">
        <Link to="/books/Fiction">Fiction</Link>
        <Link to="/books/Sci-Fi">Sci-Fi</Link>
        <Link to="/books/Non-Fiction">Non-Fiction</Link>
      </div>

      {/* ✅ Popular Books */}
      <h3>Popular Books</h3>

      <div className="book-grid">
        {books.map((book) => (
          <div className="book-card" key={book.id}>
            <img src={book.image} />
            <h4>{book.title}</h4>
            <p>{book.author}</p>

            {/* short description */}
            <p className="desc">{book.description.slice(0, 50)}...</p>

            <Link to={`/book/${book.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;