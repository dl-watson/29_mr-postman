import React, { Component } from "react";
import UserInterface from "../components/pages/UserInterface";
import Header from "../components/headers/Header";
import styles from "./styles/Home";

export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <UserInterface />
      </>
    );
  }
}
