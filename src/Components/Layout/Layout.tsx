import { Outlet } from "react-router-dom";
import styles from "../../styles/index.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
