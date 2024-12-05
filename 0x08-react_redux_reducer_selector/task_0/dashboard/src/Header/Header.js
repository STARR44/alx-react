import React, { useContext } from "react";
import { StyleSheet, css } from "aphrodite";
import logo from "../assets/holberton-logo.png";
import { AppContext } from "../App/AppContext";

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  logo: {
    height: "200px",
  },
  title: {
    fontSize: "2.5rem",
    color: "rgb(194, 79, 79)",
  },
  logoutSection: {
    marginTop: "10px",
    fontSize: "1rem",
    color: "gray",
  },
  logoutLink: {
    cursor: "pointer",
    color: "blue",
    textDecoration: "underline",
  },
});

const Header = () => {
  // Use the context to access `user` and `logOut`
  const { user, logOut } = useContext(AppContext);

  return (
    <header className={css(styles.header)}>
      <img src={logo} className={css(styles.logo)} alt="holberton-logo" />
      <h1 className={css(styles.title)}>School dashboard</h1>
      {/* Conditionally render the welcome section */}
      {user.isLoggedIn && (
        <div id="logoutSection" className={css(styles.logoutSection)}>
          Welcome {user.email} (
          <span
            className={css(styles.logoutLink)}
            onClick={logOut} // Call logOut on click
          >
            logout
          </span>
          )
        </div>
      )}
    </header>
  );
};

export default Header;
