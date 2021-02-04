import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/NavigationBar.css";

const NavigationBar = () => {
  return (
    <div className={styles.NavigationBar}>
      <Link to="/">Home</Link>
      <Link to="/history">History</Link>
      <Link to="/help">Help</Link>
    </div>
  );
};

export default NavigationBar;
