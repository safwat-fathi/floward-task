import React, { useEffect, useState } from "react";
import { Formik, Form as FormikForm, Field } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../../features/auth/authSlice";
// custom hook
import useLocalStorage from "../../hooks/localStorage.hook";

import "./styles.scss";

const Login = () => {
  // user state from auth slice
  const userState = useSelector(selectUser);
  // remember user data
  const [rememberMe, setRememberMe] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  // custom hook for storing user info in local storage
  const [userInfo, setUserInfo] = useLocalStorage("user", {});

  // Yup login schema
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/gm,
        "Password must contain at least one lowercase letter, one uppercase letter, one number and at least 6 characters!"
      )
      .required("Password is required"),
  });

  useEffect(() => {
    // store user info in local storage
    if (userState.isLoggedIn) {
      const { email, password } = userState;

      if (rememberMe) {
        setUserInfo({ email, password });
      } else {
        setUserInfo({});
      }

      console.log(userInfo);
      // navigate to home page on login success
      history.push("/");
    }
  }, [userState]);

  return (
    <section className="container">
      <h1>Login</h1>

      <Formik
        initialValues={{
          email: userInfo ? userInfo.email : "",
          password: userInfo ? userInfo.password : "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          // store user info in local storage
          if (rememberMe) {
            setUserInfo(values);
          }

          dispatch(login({ ...values, isLoggedIn: true }));
        }}
      >
        {({ errors }) => (
          <FormikForm>
            <div className="field">
              <Field
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                className={errors.email && "error"}
              />
              {errors.email && (
                <span className="errorMessage">{errors.email}</span>
              )}
            </div>

            <div className="field">
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className={errors.password && "error"}
              />
              {errors.password && (
                <span className="errorMessage">{errors.password}</span>
              )}
            </div>

            <div>
              <input
                type="checkbox"
                id="remember-me"
                value={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            <Field type="submit" value="Submit" />
          </FormikForm>
        )}
      </Formik>
    </section>
  );
};

export default Login;
