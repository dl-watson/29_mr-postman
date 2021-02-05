import React from "react";
import UserInterface from "../components/pages/UserInterface";
import styles from "./styles/Home.css";

const Home = () => {
  return (
    <div className={styles.Home}>
      <UserInterface />
    </div>
  );
};

export default Home;
