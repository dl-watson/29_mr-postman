import React from "react";
import Response from "./Response";
import PropTypes from "prop-types";
import styles from "./styles/UserInterface.css";

const UserInterface = ({
  handleChange,
  handleSubmit,
  url,
  method,
  JSON,
  response,
}) => {
  return (
    <main className={styles.UserInterface}>
      <form className={styles.formElement} onSubmit={handleSubmit}>
        <div className={styles.URLInput}>
          <input
            placeholder="URL to query ..."
            defaultValue="https://jsonplaceholder.typicode.com/posts"
            name="url"
            value={url}
            onChange={handleChange}
          />
          <button type="submit">Go</button>
        </div>
        <div className={styles.buttonContainer}>
          <label htmlFor="get">
            GET
            <input
              name="method"
              value="GET"
              type="radio"
              checked={method === "GET"}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="put">
            PUT
            <input
              name="method"
              value="PUT"
              type="radio"
              checked={method === "PUT"}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="post">
            POST
            <input
              name="method"
              value="POST"
              type="radio"
              checked={method === "POST"}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="delete">
            DELETE
            <input
              name="method"
              value="DELETE"
              type="radio"
              checked={method === "DELETE"}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.JSONInput}>
          <textarea
            className={styles.textArea}
            name="json"
            value={JSON}
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
      <div className={styles.response}>
        <Response response={response} />
      </div>
    </main>
  );
};

UserInterface.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  url: PropTypes.string,
  method: PropTypes.string,
  JSON: PropTypes.string,
  response: PropTypes.arrayOf(
    PropTypes.shape({
      body: PropTypes.string,
      id: PropTypes.number,
      title: PropTypes.string,
      userId: PropTypes.number,
    })
  ),
};

export default UserInterface;
