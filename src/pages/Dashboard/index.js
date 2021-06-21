import React, { useEffect } from "react";
import Articles from "./../../components/Articles";
import Aside from "./../../components/Aside";
import Layout from "./../../components/Layout";
import Loader from "./../../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "./../../store/actions";
import "./index.scss";

function Dashboard() {
  const dispatch = useDispatch();
  const { loading, users } = useSelector(store => store.users);

  useEffect(() => {
    if(users.length === 0) {
      dispatch(getArticles());
    }
  }, [dispatch, users]);
  return (
    <React.Fragment>
      { loading ? <Loader /> :
        <Layout>
          <div className="dashboard__content">
            <Aside />
            <Articles />
          </div>
        </Layout>
      }
    </React.Fragment>
  );
};

export default Dashboard;
