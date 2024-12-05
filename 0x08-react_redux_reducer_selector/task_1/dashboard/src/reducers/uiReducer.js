import { Map } from "immutable";
import * as uiActions from "../actions/uiActionTypes";

export const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
});

export const uiReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case uiActions.DISPLAY_NOTIFICATION_DRAWER: {
      return state.set('isNotificationDrawerVisible', true);
    }

    case uiActions.HIDE_NOTIFICATION_DRAWER: {
      return state.set('isNotificationDrawerVisible', false);
    }

    case uiActions.LOGIN_SUCCESS: {
      return state.set('isUserLoggedIn', true);
    }

    case uiActions.LOGIN_FAILURE: {
      return state.set('isUserLoggedIn', false);
    }

    case uiActions.LOGOUT: {
      return state.set('isUserLoggedIn', false);
    }

    default:
      return state;
  }
};
