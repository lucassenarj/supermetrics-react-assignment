import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import InputText from "./../InputText";
import Users from "./../Users";
import { setArticleList } from "./../../store/actions";
import "./index.scss";

function Aside(){
  const { users } = useSelector(state => state.users);
  const [senders, setSenders] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setSenders(users);
  }, [users])

  const handleSearch = ({ target: { value } }) => {
    if (value.trim() ===  "") {
      setSenders(users);
      return;
    }

    const filtered = senders.filter(({ user_name }) => user_name.toLowerCase().includes(value.toLowerCase()));
    setSenders(filtered);

    if(filtered[0]) {
      dispatch(setArticleList(filtered[0].posts));
    }
  };

  return (
    <aside>
      <InputText
        icon={<FaSearch />}
        placeholder="Search User"
        type="search"
        onChange={handleSearch}
      />
      <Users users={senders} />
    </aside>
  );
};

export default Aside;
