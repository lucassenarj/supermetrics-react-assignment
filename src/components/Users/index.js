import React from "react";
import User from "../User";
import { useDispatch, useSelector } from "react-redux";
import { setArticleList } from "./../../store/actions";
import "./index.scss";

function Users() {
  const dispatch = useDispatch();
  const { users } = useSelector(state => state.users);
  return (
    <div>
      { users.map((user) => (
        <User
          name={user.user_name}
          posts={user.posts.length}
          key={user.user_id}
          id={user.user_id}
          onClick={() => dispatch(setArticleList(user.posts))}
        />
      ))}
    </div>
  );
};

export default Users;
