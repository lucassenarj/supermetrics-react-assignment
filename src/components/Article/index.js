import React from "react";
import PropTypes from "prop-types";
import { formatDate } from "./../../utils/helpers";
import "./index.scss";

function Article({date, message}) {
  return (
    <article>
      <div className="article__header">
        <p>{ formatDate(date) }</p>
      </div>
      <div className="article__content">
        <p>{ message }</p>
      </div>
    </article>
  )
};

Article.propTypes = {
  date: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Article;
