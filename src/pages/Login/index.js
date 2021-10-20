import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
// custom hook
import useLocalStorage from "../../hooks/localStorage.hook";

const Login = () => {
  const history = useHistory();
  const [userInfo, setUserInfo] = useLocalStorage("user", {});

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    onSubmit: (values) => {
      console.log(values);

      // store user info in local storage
      if (values.rememberMe) {
        setUserInfo(values);
      }

      // navigate to home page
      history.push("/");
    },
  });

  return (
    <section>
      <h1>Login</h1>

      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={userInfo.email !== "" ? userInfo.email : formik.values.email}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={
            userInfo.password !== ""
              ? userInfo.password
              : formik.values.password
          }
        />

        <label htmlFor="remember-me">Remember me</label>
        <input
          type="checkbox"
          id="remember-me"
          name="rememberMe"
          onChange={formik.handleChange}
          value={formik.values.rememberMe}
        />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Login;
