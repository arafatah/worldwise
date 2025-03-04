import { Link } from "react-router-dom";
import PageNav from "../Components/PageNav";

function HomePage() {
  return (
    <div>
      <PageNav />
      <h1>HomePage</h1>
      <Link to="/app">Go to App</Link>
    </div>
  );
}

export default HomePage;
