import React from "react";
import Article from "./../Article";
import InputText from "./../InputText";
import { FaSearch, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { sortPostsByParameter } from "./../../utils/helpers";
import { setArticleList } from "./../../store/actions";
import "./index.scss";

function Articles() {
  const { articles } = useSelector(store => store.articles);
  const dispatch = useDispatch();

  const handleSort = type => {
    const posts = sortPostsByParameter(articles, type);
    dispatch(setArticleList(posts));
  };

  return (
    <div className="articles">
      <div className="articles__header">
        <div className="articles__buttons">
          <button
            onClick={() => handleSort("ASC")}
            className="articles__buttons__btn"
            type="button"
            title="Most recent"
          >
            <FaArrowUp />
          </button>

          <button
            onClick={() => handleSort("DESC")}
            className="articles__buttons__btn"
            type="button"
            tytle="Oldest"
          >
            <FaArrowDown />
          </button>
        </div>

        <div className="articles__search">
          <InputText
            icon={<FaSearch />}
            placeholder="Search Posts"
            type="Text"
          />
        </div>
      </div>
      { articles.length === 0 && (<span>No Articles to show</span>) }
      { articles.map(({created_time, id, message}) => (
        <Article
          key={id}
          date={created_time}
          message={message}
        />))}
    </div>
  );
};

export default Articles;
