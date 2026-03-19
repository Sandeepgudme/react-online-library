import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/books", element: <BrowseBooks /> },
  { path: "/books/:category", element: <BrowseBooks /> }, 
  { path: "/book/:id", element: <BookDetails /> },
  { path: "/add-book", element: <AddBook /> },
  { path: "*", element: <NotFound /> }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;