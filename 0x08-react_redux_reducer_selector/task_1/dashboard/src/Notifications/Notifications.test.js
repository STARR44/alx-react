import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';

describe('Notifications component', () => {
  test('renders Notifications without crashing', () => {
    render(<Notifications displayDrawer={true} />);
  });

  test('renders NotificationItem elements when displayDrawer is true', () => {
    const sampleNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
    ];

    render(<Notifications displayDrawer={true} listNotifications={sampleNotifications} />);
    const notificationItems = screen.getAllByRole('listitem');
    expect(notificationItems).toHaveLength(3);
  });

  test('renders the correct notification text when displayDrawer is true', () => {
    render(<Notifications displayDrawer={true} />);
    const notificationText = screen.getByText(/Here is the list of notifications/i);
    expect(notificationText).toHaveTextContent('Here is the list of notifications');
  });

  test('displays the menu item when displayDrawer is true or false', () => {
    render(<Notifications displayDrawer={true || false} />);
    const menuItem = screen.getByText(/Your notifications/i);
    expect(menuItem).toBeInTheDocument();
  });

  test('does not display Notifications when displayDrawer is false', () => {
    render(<Notifications displayDrawer={false} />);
    const notificationsDiv = screen.queryByTestId('Notifications');
    expect(notificationsDiv).not.toBeInTheDocument();
  });

  test('displays Notifications when displayDrawer is true', () => {
    render(<Notifications displayDrawer={true} />);
    const notificationsDiv = screen.getByTestId('Notifications');
    expect(notificationsDiv).toBeInTheDocument();
  });

  test('does not re-render when given the same listNotifications prop', () => {
    const sampleNotifications = [
      { id: 1, type: "default", value: "New course available" },
    ];

    const { rerender } = render(<Notifications displayDrawer={true} listNotifications={sampleNotifications} />);

    const consoleSpy = jest.spyOn(console, 'log');
    consoleSpy.mockClear(); // Clear any initial logs

    // Rerender the component with the same notifications list
    rerender(<Notifications displayDrawer={true} listNotifications={sampleNotifications} />);

    expect(consoleSpy).not.toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  test('re-renders when given a longer listNotifications prop', () => {
    const initialNotifications = [
      { id: 1, type: "default", value: "New course available" },
    ];
    const updatedNotifications = [
      ...initialNotifications,
      { id: 2, type: "urgent", value: "New resume available" },
    ];

    const { rerender } = render(<Notifications displayDrawer={true} listNotifications={initialNotifications} />);

    const initialNotificationCount = screen.getAllByRole('listitem').length;

    rerender(<Notifications displayDrawer={true} listNotifications={updatedNotifications} />);

    const updatedNotificationCount = screen.getAllByRole('listitem').length;
    expect(updatedNotificationCount).toBeGreaterThan(initialNotificationCount);
  });

  const mockHandleDisplayDrawer = jest.fn();
  const mockHandleHideDrawer = jest.fn();

  test("clicking on menu item calls handleDisplayDrawer", () => {
    render(
      <Notifications
        displayDrawer={false}
        handleDisplayDrawer={mockHandleDisplayDrawer}
      />
    );
    const menuItem = screen.getByText("Your notifications");
    fireEvent.click(menuItem);
    expect(mockHandleDisplayDrawer).toHaveBeenCalledTimes(1);
  });

  test("clicking on close button calls handleHideDrawer", () => {
    render(
      <Notifications
        displayDrawer={true}
        handleHideDrawer={mockHandleHideDrawer}
      />
    );
    const closeButton = screen.getByRole("button", { name: "Close" });
    fireEvent.click(closeButton);
    expect(mockHandleHideDrawer).toHaveBeenCalledTimes(1);
  });
});
