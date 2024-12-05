import notificationsData from "../../../../notifications.json";
import { normalize, schema } from "normalizr";

// Define schemas
const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

// Normalize data
const normalizedData = normalize(notificationsData, [notification]);

// Function using normalized data
function getAllNotificationsByUser(userId) {
  const notifications = normalizedData.entities.notifications;
  const messages = normalizedData.entities.messages;

  const userNotifications = [];
  for (const id in notifications) {
    if (notifications[id].author === userId) {
      userNotifications.push(messages[notifications[id].context]);
    }
  }

  return userNotifications;
}

export { normalizedData, getAllNotificationsByUser };
