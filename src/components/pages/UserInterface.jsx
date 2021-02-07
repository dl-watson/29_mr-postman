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
              id="get"
              value="get"
              type="radio"
              name="method"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="put">
            PUT
            <input
              id="put"
              value="put"
              type="radio"
              name="method"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="post">
            POST
            <input
              id="post"
              value="post"
              type="radio"
              name="method"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="delete">
            DELETE
            <input
              id="delete"
              value="delete"
              type="radio"
              name="method"
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
