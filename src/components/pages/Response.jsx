import React from "react";
import PropTypes from "prop-types";
import ReactJson from "react-json-view";
import styles from "./styles/Response.css";

const Response = ({ response }) => {
  return (
    <div data-testid="response-viewer" className={styles.Response}>
      <ReactJson crossorigin src={response} />
    </div>
  );
};

Response.propTypes = {
  response: PropTypes.any,
};

export default Response;
