import { Link } from "react-router";
function NotFoundPage() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link to="/">Go Back Home</Link>
    </div>
  );
}

export { NotFoundPage };
