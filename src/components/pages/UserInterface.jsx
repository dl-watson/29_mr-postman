import React from "react";
import PropTypes from "prop-types";
import TextAreaAutosize from "react-textarea-autosize";
import styles from "./styles/UserInterface.css";

const UserInterface = ({ handleChange, handleSubmit, url, method }) => {
  return (
    <main className={styles.UserInterface}>
      <form className={styles.formElement} onSubmit={handleSubmit}>
        <div className={styles.URLInput}>
          <input
            placeholder="URL to query ..."
            name="url"
            value={url}
            onChange={handleChange}
          />
          <button type="submit">Go</button>
        </div>
        <div className={styles.buttonContainer}>
          <label htmlFor="GET">
            GET
            <input
              name="method"
              id="GET"
              value="GET"
              type="radio"
              checked={method === "GET"}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="PUT">
            PUT
            <input
              name="method"
              id="PUT"
              value="PUT"
              type="radio"
              checked={method === "PUT"}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="POST">
            POST
            <input
              name="method"
              id="POST"
              value="POST"
              type="radio"
              checked={method === "POST"}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="DELETE">
            DELETE
            <input
              name="method"
              id="DELETE"
              value="DELETE"
              type="radio"
              checked={method === "DELETE"}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.JSONInput}>
          <TextAreaAutosize
            className={styles.textArea}
            name="json"
            onChange={handleChange}
          />
        </div>
      </form>
    </main>
  );
};

UserInterface.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  url: PropTypes.string,
  method: PropTypes.string,
};

export default UserInterface;
