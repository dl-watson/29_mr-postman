import React, { Component } from "react";
import UserInterface from "../components/pages/UserInterface";
import Header from "../components/headers/Header";
import styles from "./styles/Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className={styles.Home}>
        <Header />
        <UserInterface />
      </div>
    );
  }
}
