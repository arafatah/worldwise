import { Link } from "react-router-dom";
import PageNav from "../Components/PageNav";

function HomePage() {
  return (
    <div>
      <PageNav />
      <h1>HomePage</h1>
      <Link to="/pricing">Go to Price</Link>
    </div>
  );
}

export default HomePage;
