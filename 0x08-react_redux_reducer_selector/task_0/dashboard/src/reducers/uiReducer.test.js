import { uiReducer, initialState } from "./uiReducer";
import * as uiActions from "../actions/uiActionTypes";

describe("uiReducer", () => {
  it("should return the initial state when no action is passed", () => {
    const newState = uiReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it("should return the initial state when an unrelated action is passed", () => {
    const newState = uiReducer(initialState, { type: "SELECT_COURSE" });
    expect(newState).toEqual(initialState);
  });

  it("should set isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER is passed", () => {
    const state = {
      ...initialState,
      isNotificationDrawerVisible: true,
    }

    const newState = uiReducer(initialState, {
      type: uiActions.DISPLAY_NOTIFICATION_DRAWER,
    });
    expect(newState).toEqual(state);
  });

  it("should set isNotificationDrawerVisible to false when HIDE_NOTIFICATION_DRAWER is passed", () => {
    const prevState = {
      ...initialState,
      isNotificationDrawerVisible: true,
    };

    const newState = uiReducer(prevState, {
      type: uiActions.HIDE_NOTIFICATION_DRAWER,
    });

    expect(newState).toEqual({
      ...prevState,
      isNotificationDrawerVisible: false,
    });
  });

  it("should set isUserLoggedIn to true when LOGIN_SUCCESS is passed", () => {
    const newState = uiReducer(initialState, { type: uiActions.LOGIN_SUCCESS });
    expect(newState).toEqual({
      ...initialState,
      isUserLoggedIn: true,
    });
  });

  it("should set isUserLoggedIn to false when LOGIN_FAILURE is passed", () => {
    const newState = uiReducer(initialState, { type: uiActions.LOGIN_FAILURE });
    expect(newState).toEqual({
      ...initialState,
      isUserLoggedIn: false,
    });
  });

  it("should set isUserLoggedIn to false when LOGOUT is passed", () => {
    const prevState = {
      ...initialState,
      isUserLoggedIn: true,
    };
    const newState = uiReducer(prevState, { type: uiActions.LOGOUT });
    expect(newState).toEqual({
      ...prevState,
      isUserLoggedIn: false,
    });
  });
});
