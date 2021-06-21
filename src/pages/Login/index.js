import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import InputText from "./../../components/InputText";
import Loader from "./../../components/Loader";
import { verifyToken } from "./../../utils/helpers";
import { signIn } from "./../../store/actions";
import "./index.scss";

function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { loading, sl_token, expiration } = useSelector(state => state.app);
  const [values, setValues] = useState({
    email: "",
    name: "",
  });

  useEffect(() => {
    const isValid = verifyToken(sl_token, expiration);
    console.log(isValid);
    if(isValid) {
      history.push("/dashboard");
    }
  }, [expiration, history, sl_token]);

  const handleValues = ({ target: { name, value }}) => {
    setValues({
      ...values,
      [name]: value,
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
    dispatch(signIn(values.name, values.email));
  }

  return (
    <React.Fragment>
      {
        loading ? <Loader /> : (
          <section className="login">
            <form onSubmit={handleSubmit}>
              <div className="login__form">
                <div className="login__form__heading">
                  <h2>Login</h2>
                </div>

                <div className="login__form__fields">
                  <InputText
                    type="text"
                    placeholder="Name"
                    icon={<FaUser />}
                    label="Name"
                    value={values.name}
                    onChange={handleValues}
                    name="name"
                  />

                  <InputText
                    type="email"
                    placeholder="Email"
                    icon={<FaEnvelope />}
                    label="Email"
                    value={values.email}
                    onChange={handleValues}
                    name="email"
                  />
                </div>

                <div className="login__form__button">
                  <button
                  className="login__form__button__btn"
                  type="submit"
                  >
                    Go
                  </button>
                </div>
              </div>
            </form>
          </section>
        )
      }
    </React.Fragment>
  );
};

export default Login;
