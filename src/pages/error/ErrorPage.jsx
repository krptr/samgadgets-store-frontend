import { Link } from "react-router";
function ErrorPage() {
  return (
    <div>
      <h1>Something Went wrong</h1>
      <Link to="/">Go Back Home</Link>
    </div>
  );
}

export { ErrorPage };
