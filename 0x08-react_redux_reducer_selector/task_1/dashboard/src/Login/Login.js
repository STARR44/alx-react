import React, { useState } from "react";
import { StyleSheet, css } from "aphrodite";

const Login = ({ logIn }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
    isLoggedIn: false,
    enableSubmit: false,
  });

  const handleChangeEmail = (e) => {
    const email = e.target.value;
    setState((prevState) => {
      const enableSubmit = email !== "" && prevState.password !== "";
      return { ...prevState, email, enableSubmit };
    });
  };

  const handleChangePassword = (e) => {
    const password = e.target.value;
    setState((prevState) => {
      const enableSubmit = prevState.email !== "" && password !== "";
      return { ...prevState, password, enableSubmit };
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const { email, password } = state;
    logIn(email, password);
  };

  return (
    <div className={css(styles.loginBody)} data-testid="Login">
      <p className={css(styles.title)}>Login to access the full dashboard</p>
      <form onSubmit={handleLoginSubmit}>
        <div className={css(styles.inputGroup)}>
          <label htmlFor="email" className={css(styles.label)}>Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={state.email}
            onChange={handleChangeEmail}
            className={css(styles.input)}
          />
        </div>
        <div className={css(styles.inputGroup)}>
          <label htmlFor="password" className={css(styles.label)}>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={state.password}
            onChange={handleChangePassword}
            className={css(styles.input)}
          />
        </div>
        <input
          type="submit"
          value="Login"
          className={css(styles.button)}
          disabled={!state.enableSubmit}
        />
      </form>
    </div>
  );
};

const styles = StyleSheet.create({
  loginBody: {
    flexGrow: 1,
    paddingTop: "2em",
    paddingLeft: "2em",
    paddingRight: "2em",
    "@media (max-width: 900px)": {
      padding: "1em",
    },
  },
  title: {
    fontWeight: "bold",
  },
  inputGroup: {
    marginBottom: "1em",
    display: "flex",
    flexDirection: "column",
    "@media (min-width: 900px)": {
      flexDirection: "row",
      alignItems: "center",
    },
  },
  label: {
    marginBottom: "0.5em",
    fontWeight: "bold",
    "@media (min-width: 900px)": {
      marginBottom: 0,
      marginRight: "1em",
    },
  },
  input: {
    padding: "0.5em",
    fontSize: "1em",
    "@media (min-width: 900px)": {
      flexGrow: 1,
    },
  },
  button: {
    padding: "0.5em 1em",
    fontSize: "1em",
    marginTop: "1em",
    cursor: "pointer",
  },
});

export default Login;
