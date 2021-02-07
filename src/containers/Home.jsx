import React, { Component } from "react";
import UserInterface from "../components/pages/UserInterface";
import styles from "./styles/Home.css";

export default class Home extends Component {
  state = {
    url: "",
    method: "",
    JSON: "",
    result: {},
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { handleChange } = this;
    return (
      <div className={styles.Home}>
        <UserInterface handleChange={handleChange} />
      </div>
    );
  }
}
