import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import Footer from "./Footer";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      {/* This outlet use for nested routes will show here. Like children element. */}
      <Outlet />

      <Footer styles={styles} />
    </div>
  );
}

export default Sidebar;
