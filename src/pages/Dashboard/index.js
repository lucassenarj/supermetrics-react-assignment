import React, { useEffect } from "react";
import Articles from "./../../components/Articles";
import Aside from "./../../components/Aside";
import Layout from "./../../components/Layout";
import Loader from "./../../components/Loader";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "./../../store/actions";
import { verifyToken } from "./../../utils/helpers";
import "./index.scss";

function Dashboard() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading, users } = useSelector(store => store.users);
  const { sl_token, expiration } = useSelector(store => store.app);

  useEffect(() => {
    const isValid = verifyToken(sl_token, expiration);
    if(!isValid) {
      history.push("/");
    }
  }, [expiration, history, sl_token]);

  useEffect(() => {
    if(users.length === 0) {
      dispatch(getArticles(sl_token));
    }
  }, [dispatch, users, sl_token]);
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
