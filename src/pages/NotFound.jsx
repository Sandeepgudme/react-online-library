import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h2>404 - Page Not Found</h2>
      <Link to="/">Go Home</Link>
    </>
  );
}

export default NotFound;