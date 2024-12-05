import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";

// Action creator for marking a notification as read
export const markAsRead = (index) => {
  return {
    type: MARK_AS_READ,
    index,
  };
};

// Bound action creator for markAsRead
export const boundMarkAsRead = (index) => (dispatch) =>
  dispatch(markAsRead(index));

// Action creator for setting the notification filter
export const setNotificationFilter = (filter) => {
  return {
    type: SET_TYPE_FILTER,
    filter,
  };
};

// Bound action creator for setNotificationFilter
export const boundSetNotificationFilter = (filter) => (dispatch) =>
  dispatch(setNotificationFilter(filter));
