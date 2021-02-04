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
          <button type="radio" name="get">
            GET
          </button>
          <button type="radio" name="put">
            PUT
          </button>
          <button type="radio" name="post">
            POST
          </button>
          <button type="radio" name="delete">
            DELETE
          </button>
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
