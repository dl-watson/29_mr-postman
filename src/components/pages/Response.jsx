import React from "react";
import PropTypes from "prop-types";

const Response = ({ response }) => {
  return <div>{response}</div>;
};

Response.propTypes = {
  response: PropTypes.arrayOf(
    PropTypes.shape({
      body: PropTypes.string,
      id: PropTypes.number,
      title: PropTypes.string,
      userId: PropTypes.number,
    })
  ),
};

export default Response;
