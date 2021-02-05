import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/UserInterface.css";

const UserInterface = (props) => {
  return (
    <main className={styles.UserInterface}>
      <div className={styles.URLInput}>
        <input />
        <button>Go</button>
      </div>
      <div className={styles.radioButtons}>
        <form>
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
      </div>
      <div className={styles.JSONInput}>
        <span
          className={styles.textArea}
          placeholder="JSON"
          role="textbox"
          contentEditable
        ></span>
      </div>
    </main>
  );
};

UserInterface.propTypes = {};

export default UserInterface;
