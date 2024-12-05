// import { configureStore, createSlice } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
// import fetchMock from "fetch-mock-jest";
import * as uiActionTypes from "./uiActionTypes.js";
import * as uiActionCreators from "./uiActionCreators.js";

describe("Test for UI Action Creators", () => {
  test("login returns type: LOGIN and user: { email, password }", () => {
    const expectedResult = {
      type: uiActionTypes.LOGIN,
      user: { email: "solomonchuks@gmail.com", password: "Chuks123" },
    };
    const login = uiActionCreators.login("solomonchuks@gmail.com", "Chuks123");
    expect(login).toEqual(expectedResult);
  });

  test("logout returns type: LOGOUT", () => {
    const expectedResult = { type: uiActionTypes.LOGOUT };
    const logout = uiActionCreators.logout();
    expect(logout).toEqual(expectedResult);
  });

  test("displayNotificationDrawer returns the correct type", () => {
    const expectedResult = { type: uiActionTypes.DISPLAY_NOTIFICATION_DRAWER };
    const displayNotfication = uiActionCreators.displayNotificationDrawer();
    expect(displayNotfication).toEqual(expectedResult);
  });

  test("hideNotificationDrawer returns the correct type", () => {
    const expectedResult = { type: uiActionTypes.HIDE_NOTIFICATION_DRAWER };
    const hideNotfication = uiActionCreators.hideNotificationDrawer();
    expect(hideNotfication).toEqual(expectedResult);
  });
});

/* Test Failed to work dues to incompatibilty of dependecies
  ==========================================================

  // Create a reducer to handle actions for testing
  const uiReducer = createSlice({
    name: "ui",
    initialState: { user: null, loginStatus: null },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(uiActionTypes.LOGIN, (state, action) => {
          state.user = action.user;
        })
        .addCase(uiActionTypes.LOGIN_SUCCESS, (state) => {
          state.loginStatus = "success";
        })
        .addCase(uiActionTypes.LOGIN_FAILURE, (state) => {
          state.loginStatus = "failure";
        });
    },
  }).reducer;

  // Set up the store
  const store = configureStore({
    reducer: { ui: uiReducer },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  });

  describe("loginRequest action creator", () => {
    afterEach(() => {
      fetchMock.restore();
    });

    it("dispatches LOGIN and LOGIN_SUCCESS when API call is successful", async () => {
      fetchMock.mock("http://localhost:3000/alx-react/public/login-success.json", {
        body: { success: true },
        headers: { "content-type": "application/json" },
      });

      await store.dispatch(uiActionCreators.loginRequest("test@example.com", "password"));

      const state = store.getState().ui;
      expect(state.user).toEqual({ email: "test@example.com", password: "password" });
      expect(state.loginStatus).toEqual("success");
    });

    it("dispatches LOGIN and LOGIN_FAILURE when API call fails", async () => {
      fetchMock.mock("/public/login-success.json", 500);

      await store.dispatch(loginRequest("test@example.com", "password"));

      const state = store.getState().ui;
      expect(state.user).toEqual({ email: "test@example.com", password: "password" });
      expect(state.loginStatus).toEqual("failure");
    });
  });

*/
