import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styles from "./styles/NavigationBar.css";

const NavigationBar = () => {
  return (
    <Router>
      <div className={styles.NavigationBar}>
        <Link to="/">
          <div className={styles.navButton}>home</div>
        </Link>
        <Link to="/history">
          <div className={styles.navButton}>history</div>
        </Link>
        <Link to="/help">
          <div className={styles.navButton}>help</div>
        </Link>
      </div>
    </Router>
  );
};

export default NavigationBar;
