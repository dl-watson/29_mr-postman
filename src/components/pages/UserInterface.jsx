import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/UserInterface.css";

const UserInterface = ({ handleChange }) => {
  return (
    <main className={styles.UserInterface}>
      <form className={styles.formElement}>
        <div className={styles.URLInput}>
          <input placeholder="URL to query ..." />
          <button>Go</button>
        </div>
        <div className={styles.buttonContainer}>
          <label htmlFor="get">
            GET
            <input
              type="radio"
              id="get"
              name="method"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="put">
            PUT
            <input
              type="radio"
              id="put"
              name="method"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="post">
            POST
            <input
              type="radio"
              id="post"
              name="method"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="delete">
            DELETE
            <input
              type="radio"
              name="method"
              id="delete"
              value="delete"
              onChange={handleChange}
            />
          </label>
        </div>
      </form>
      <div className={styles.JSONInput}>
        <span
          className={styles.textArea}
          placeholder="JSON"
          role="textbox"
          contentEditable
        ></span>
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
