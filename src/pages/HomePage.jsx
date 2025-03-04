import { Link } from "react-router-dom";
import PageNav from "../Components/PageNav";
import AppNav from "../Components/AppNav";

function HomePage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1 className='test'>HomePage</h1>
      <Link to="/app">Go to App</Link>
    </div>
  );
}

export default HomePage;
