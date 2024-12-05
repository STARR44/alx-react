import React, { useContext } from "react";
import { StyleSheet, css } from "aphrodite";
import { getFullYear, getFooterCopy } from "../utils/utils";
import { AppContext } from "../App/AppContext";

const Footer = () => {
  const { user } = useContext(AppContext); // Subscribe to context

  return (
    <footer className={css(styles.appFooter)} role="contentinfo">
      {user.isLoggedIn && ( // Conditional rendering for logged-in user
        <p>
          <a href="#contact" className={css(styles.contactLink)}>
            Contact us
          </a>
        </p>
      )}
      Copyright {getFullYear()} - {getFooterCopy(true)}
    </footer>
  );
};

const styles = StyleSheet.create({
  appFooter: {
    padding: "1em 0",
    textAlign: "center",
    fontStyle: "italic",
    borderTop: "3px solid rgb(194, 79, 79)",
  },
  contactLink: {
    color: "rgb(194, 79, 79)",
    textDecoration: "none",
    ":hover": {
      textDecoration: "underline",
    },
  },
});

export default Footer;
