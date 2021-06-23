import React from "react";
import User from "../User";
import { useDispatch } from "react-redux";
import { setArticleList } from "./../../store/actions";
import { useHistory } from "react-router-dom";
import { generateSlug } from "./../../utils/helpers";
import "./index.scss";

function Users({ users }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClickUser = ({ user_name, posts }) => {
    const slug = generateSlug(user_name);
    dispatch(setArticleList(posts));
    history.push(`/posts/${slug}`);
  };

  return (
    <div>
      { users.length === 0 ? (<p>No user founded!</p>) : 
        users.map((user) => (
        <User
          name={user.user_name}
          posts={user.posts.length}
          key={user.user_id}
          id={user.user_id}
          onClick={() => handleClickUser(user)}
        />
      ))}
    </div>
  );
};

export default Users;
