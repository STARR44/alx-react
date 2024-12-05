import { NotificationTypeFilters } from "./notificationActionTypes";
import { markAsRead, setNotificationFilter } from "./notificationActionCreators";

describe("Test for Notifications Action Creators", () => {
  test("Calling the creator with 1 as an argument should return obj", () => {
    const expectedResult = {
      type: "MARK_AS_READ",
      index: 1,
    };
    expect(markAsRead(1)).toEqual(expectedResult);
  });

  test("Calling the creator with DEFAULT filter return the obj", () => {
    const expectedResult = {
      type: "SET_TYPE_FILTER",
      filter: "DEFAULT",
    };

    const filter = setNotificationFilter(NotificationTypeFilters["DEFAULT"]);
    expect(filter).toEqual(expectedResult);
  });
});
