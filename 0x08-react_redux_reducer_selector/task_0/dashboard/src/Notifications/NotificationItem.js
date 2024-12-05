import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

class NotificationItem extends PureComponent {
  static propTypes = {
    type: PropTypes.string.isRequired,
    html: PropTypes.shape({
      __html: PropTypes.string,
    }),
    value: PropTypes.string,
    markAsRead: PropTypes.func,
    id: PropTypes.number.isRequired,
  };

  static defaultProps = {
    markAsRead: () => {},
  };

  handleClick = () => {
    const { markAsRead, id } = this.props;
    markAsRead(id);
  };

  render() {
    const { type, html, value } = this.props;

    return (
      <>
        {value && (
          <li
            className={css(
              styles.notificationItem,
              type === "urgent" ? styles.urgent : styles.default
            )}
            data-notification-type={type}
            onClick={this.handleClick}
          >
            {value}
          </li>
        )}
        {html && (
          <li
            className={css(styles.notificationItem, styles.urgent)}
            data-notification-type="urgent"
            data-urgent="true"
            data-testid="notification-html"
            dangerouslySetInnerHTML={html}
            onClick={this.handleClick}
          ></li>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  notificationItem: {
    width: "100%",
    fontSize: "20px",
    padding: "10px 8px",
    borderBottom: "1px solid black",
  },
  default: {
    color: "blue",
  },
  urgent: {
    color: "red",
  },
});

export default NotificationItem;
