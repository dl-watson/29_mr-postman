import React from "react";
import PropTypes from "prop-types";
import ReactJson from "react-json-view";
import styles from "./styles/Response.css";

const Response = ({ response }) => {
  return (
    <>
      <ReactJson className={styles.response} crossorigin src={response} />
    </>
  );
};

Response.propTypes = {
  response: PropTypes.array,
};

export default Response;
