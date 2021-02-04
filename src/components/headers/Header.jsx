import React from "react";
import NavigationBar from "./NavigationBar";
import styles from "./styles/Header.css";

const Header = () => {
  return (
    <header className={styles.Header}>
      <h2>Header</h2>
      <NavigationBar />
    </header>
  );
};

export default Header;
