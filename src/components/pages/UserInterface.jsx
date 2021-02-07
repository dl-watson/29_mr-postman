import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/UserInterface.css";

const UserInterface = ({ handleChange }) => {
  return (
    <main className={styles.UserInterface}>
      <div className={styles.URLInput}>
        <input placeholder="URL to query ..." />
        <button>Go</button>
      </div>
      <div className={styles.buttonContainer}>
        <form className={styles.formElement}>
          <label htmlFor="get">
            GET
            <input type="radio" id="get" name="method" />
          </label>
          <label htmlFor="put">
            PUT
            <input type="radio" id="put" name="method" />
          </label>
          <label htmlFor="post">
            POST
            <input type="radio" id="post" name="method" />
          </label>
          <label htmlFor="delete">
            DELETE
            <input type="radio" id="delete" name="method" />
          </label>
        </form>
        <div className={styles.JSONInput}>
          <span
            className={styles.textArea}
            placeholder="JSON"
            role="textbox"
            contentEditable
          ></span>
        </div>
      </div>
      <div className={styles.results}>
        <span>Results</span>
      </div>
    </main>
  );
};

UserInterface.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default UserInterface;
