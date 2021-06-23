import React, { useEffect, useState } from "react";
import Article from "./../Article";
import InputText from "./../InputText";
import { FaSearch, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { sortPostsByParameter } from "./../../utils/helpers";
import "./index.scss";

function Articles() {
  const [posts, setPosts] = useState([]);
  const [active, setActive] = useState("ASC");
  const { articles } = useSelector(store => store.articles);
  
  useEffect(() => {
    setPosts(articles);
  }, [articles]);

  const handleSearch = ({ target: { value} }) => {
    if (value.trim() ===  "") {
      setPosts(articles);
      return;
    }

    const filtered = posts.filter(({ message }) => message.includes(value));
    setPosts(filtered);
  }

  const handleSort = (type) => {
    const sorted = sortPostsByParameter(posts, type);
    setPosts(sorted);
    setActive(type);
  };

  return (
    <div className="articles">
      <div className="articles__header">
        <div className="articles__buttons">
          <button
            onClick={() => handleSort("ASC")}
            className={["articles__buttons__btn", active === "ASC" ? "articles__buttons__btn--active" : ""].join(" ")}
            type="button"
            title="Most recent"
            data-testid="order-asc"
          >
            <FaArrowDown />
          </button>

          <button
            onClick={() => handleSort("DESC")}
            className={["articles__buttons__btn", active === "DESC" ? "articles__buttons__btn--active" : ""].join(" ")}
            type="button"
            title="Oldest"
            data-testid="order-desc"
            >
            <FaArrowUp />
          </button>
        </div>

        <div className="articles__search">
          <InputText
            icon={<FaSearch />}
            placeholder="Search Posts"
            type="search"
            onChange={handleSearch}
          />
        </div>
      </div>
      { posts.length === 0 && (<p>No article founded</p>) }
      { posts.map(({created_time, id, message}) => (
        <Article
          key={id}
          date={created_time}
          message={message}
        />))}
    </div>
  );
};

export default Articles;
