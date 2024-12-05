import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends PureComponent {
  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
    markNotificationAsRead: PropTypes.func, // Add prop type for markNotificationAsRead
  };

  static defaultProps = {
    displayDrawer: false,
    listNotifications: [],
    handleDisplayDrawer: () => {},
    handleHideDrawer: () => {},
    markNotificationAsRead: () => {}, // Provide a default function
  };

  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
      markNotificationAsRead,
    } = this.props;

    return (
      <div className={css(styles.notificationContainer)}>
        <div
          className={css(styles.menuItem)}
          onClick={handleDisplayDrawer}
          data-testid="menu-item"
        >
          <p>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className={css(styles.notifications)} data-testid="Notifications">
            <button
              className={css(styles.closeBtn)}
              aria-label="Close"
              onClick={handleHideDrawer}
            >
              <img
                src={closeIcon}
                className={css(styles.closeIcon)}
                alt="close"
              />
            </button>
            <p>Here is the list of notifications</p>
            <ul className={css(styles.notificationList)}>
              {listNotifications.length === 0 ? (
                <li>No new notification for now</li>
              ) : (
                listNotifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    id={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                    markAsRead={() => markNotificationAsRead(notification.id)} // Use markNotificationAsRead
                  />
                ))
              )}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  notificationContainer: {
    position: "relative",
  },
  menuItem: {
    marginBottom: "1em",
    cursor: "pointer",
  },
  notifications: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "95%",
    height: "100%",
    backgroundColor: "white",
    zIndex: 1000,
    fontSize: "20px",
    padding: "1em",
    overflowY: "auto",
    "@media (min-width: 900px)": {
      position: "relative",
      width: "90%",
      height: "auto",
      padding: "1em",
      border: "2px dashed red",
      marginBottom: "20px",
    },
  },
  closeBtn: {
    border: "none",
    background: "transparent",
    cursor: "pointer",
    position: "absolute",
    right: "1em",
    top: "1em",
  },
  closeIcon: {
    width: "20px",
  },
  notificationList: {
    padding: 0,
    listStyleType: "none",
  },
});

export default Notifications;
