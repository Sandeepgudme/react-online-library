import { useSelector } from "react-redux";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./home.css";

function BrowseBooks() {
  const books = useSelector((state) => state.books);
  const { category } = useParams(); // ✅ important
  const [search, setSearch] = useState("");

  const filtered = books.filter((book) => {
    const matchCategory = category ? book.category === category : true;

    const matchSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <>
      <Navbar />

      <h2>{category ? `${category} Books` : "Browse Books"}</h2>

      <input
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="book-grid">
        {filtered.map((book) => (
          <div className="book-card" key={book.id}>
            <img src={book.image} />
            <h4>{book.title}</h4>
            <p>{book.author}</p>
            <Link to={`/book/${book.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default BrowseBooks;