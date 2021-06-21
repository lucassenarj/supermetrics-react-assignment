import React from "react";
import { FaSearch } from "react-icons/fa";
import InputText from "./../InputText";
import Users from "./../Users";
import "./index.scss";

function Aside(){
  return (
    <aside>
      <InputText
        icon={<FaSearch />}
        placeholder="Search User"
        type="Text"
      />
      <Users />
    </aside>
  );
};

export default Aside;
