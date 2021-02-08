/* eslint-disable indent */
import React, { Component } from "react";
import UserInterface from "../components/pages/UserInterface";
import fetchAPI from "../services/fetchAPI";
import styles from "./styles/Home.css";

export default class Home extends Component {
  state = {
    url: "",
    method: "",
    JSON: "",
    response: "",
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleFetch();
  };

  handleFetch = () => {
    const { url, method, JSON } = this.state;

    fetchAPI(url, method, JSON).then(
      (res) => this.setState({ response: res }),
      () => {
        console.log(this.state.response);
      }
    );
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { results, method, JSON, response } = this.state;
    console.log(response);
    return (
      <div className={styles.Home}>
        <UserInterface
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          results={results}
          method={method}
          JSON={JSON}
          response={response}
        />
      </div>
    );
  }
}
