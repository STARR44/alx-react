import * as uiActions from "../actions/uiActionTypes";

export const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
};

export const uiReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case uiActions.DISPLAY_NOTIFICATION_DRAWER: {
      return { ...state, isNotificationDrawerVisible: true };
    }

    case uiActions.HIDE_NOTIFICATION_DRAWER: {
      return { ...state, isNotificationDrawerVisible: false };
    }

    case uiActions.LOGIN_SUCCESS: {
      return { ...state, isUserLoggedIn: true };
    }

    case uiActions.LOGIN_FAILURE: {
      return { ...state, isUserLoggedIn: false };
    }

    case uiActions.LOGOUT: {
      return {...state, isUserLoggedIn: false};
    }

    default:
      return state;
  }
};
