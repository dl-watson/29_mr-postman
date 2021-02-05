import React from "react";
import NavigationBar from "./NavigationBar";
import styles from "./styles/Header.css";

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.heading}>
        <h2>Mr. Postman</h2>
      </div>
      <NavigationBar />
    </header>
  );
};

export default Header;
