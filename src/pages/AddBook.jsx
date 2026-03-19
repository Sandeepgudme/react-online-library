import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/bookSlice";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./addbook.css";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!title || !author || !image || !description || !category) {
      alert("Fill all fields");
      return;
    }

    dispatch({
      type: "books/addBook",
      payload: {
        id: Date.now(),
        title,
        author,
        image,
        description,
        category
      }
    });

    navigate("/books");
  };

  return (
    <>
      <Navbar />

      <div className="form-container">
        <h2>Add Book</h2>

        <input
          placeholder="Book Title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="Author Name"
          onChange={(e) => setAuthor(e.target.value)}
        />

        <input
          placeholder="Image URL"
          onChange={(e) => setImage(e.target.value)}
        />

        <textarea
          placeholder="Description" className="d-textarea"
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          placeholder="Category (Fiction / Sci-Fi / Non-Fiction)"
          onChange={(e) => setCategory(e.target.value)}
        />

        <button className="add-btn" onClick={handleSubmit}>
          Add Book
        </button>
      </div>
    </>
  );
}

export default AddBook;