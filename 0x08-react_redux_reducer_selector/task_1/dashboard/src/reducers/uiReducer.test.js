import { uiReducer, initialState } from "./uiReducer";
import * as uiActions from "../actions/uiActionTypes";

describe("uiReducer", () => {
  it("should return the initial state when no action is passed", () => {
    const newState = uiReducer(undefined, {});
    expect(newState.toJS()).toEqual(initialState.toJS());
  });

  it("should return the initial state when a wrong action is passed", () => {
    const newState = uiReducer(initialState, { type: "SELECT_COURSE" });
    expect(newState.toJS()).toEqual(initialState.toJS());
  });

  it("should set isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER is passed", () => {
    const newState = uiReducer(initialState, {
      type: uiActions.DISPLAY_NOTIFICATION_DRAWER,
    });

    expect(newState).toEqual(initialState.set("isNotificationDrawerVisible", true));
  });

  it("should set isNotificationDrawerVisible to false when HIDE_NOTIFICATION_DRAWER is passed", () => {
    const prevState = initialState.set("isNotificationDrawerVisible", true);

    const newState = uiReducer(prevState, {
      type: uiActions.HIDE_NOTIFICATION_DRAWER,
    });

    expect(newState).toEqual(initialState.set("isNotificationDrawerVisible", false));
  });

  it("should set isUserLoggedIn to true when LOGIN_SUCCESS is passed", () => {
    const newState = uiReducer(initialState, { type: uiActions.LOGIN_SUCCESS });
    expect(newState).toEqual(initialState.set("isUserLoggedIn", true));
  });

  it("should set isUserLoggedIn to false when LOGIN_FAILURE is passed", () => {
    const newState = uiReducer(initialState, { type: uiActions.LOGIN_FAILURE });
    expect(newState).toEqual(initialState.set("isUserLoggedIn", false));
  });

  it("should set isUserLoggedIn to false when LOGOUT is passed", () => {
    const prevState = initialState.set("isUserLoggedIn", true);
    const newState = uiReducer(prevState, { type: uiActions.LOGOUT });
    expect(newState).toEqual(initialState.set("isUserLoggedIn", false));
  });
});
