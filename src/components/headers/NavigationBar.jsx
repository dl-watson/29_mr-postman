import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/NavigationBar.css";

const NavigationBar = () => {
  return (
    <div className={styles.NavigationBar}>
      <Link to="/">
        <div className={styles.navButton}>Home</div>
      </Link>
      <Link to="/history">
        <div className={styles.navButton}>History</div>
      </Link>
      <Link to="/help">
        <div className={styles.navButton}>Help</div>
      </Link>
    </div>
  );
};

export default NavigationBar;
