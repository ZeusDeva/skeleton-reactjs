// Style
import classes from "./style.module.less";
import Sidebar from "../Sidebar/sidebar";
import Iframe from "../Iframe";

const Layout = () => {
  return (
    <div className={classes.display}>
      <Sidebar />
      <main className={classes.mainContent}>
        <div className={classes.iframeContent}>
          <Iframe />
        </div>
      </main>
    </div>
  );
};

export default Layout;
