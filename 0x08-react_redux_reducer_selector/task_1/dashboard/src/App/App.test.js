import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders without crashing', () => {
    render(<App />);
    const divAppElement = screen.getByTestId('App');
    expect(divAppElement).toBeInTheDocument();
  });

  test("contains the Notifications component after clicking 'Your notifications'", () => {
    render(<App />);

    // Initially, Notifications is not rendered
    let notifications = screen.queryByTestId("Notifications");
    expect(notifications).toBeNull();

    // Simulate clicking on "Your notifications" to show the drawer
    const menuItem = screen.getByText("Your notifications");
    fireEvent.click(menuItem);

    // After clicking, Notifications should be rendered
    notifications = screen.getByTestId("Notifications");
    expect(notifications).toBeInTheDocument();
  });

  test("default state of displayDrawer is false", () => {
    render(<App />);
    const notifications = screen.queryByTestId("Notifications");
    expect(notifications).toBeNull();
  });

  test("handleDisplayDrawer sets displayDrawer to true", () => {
    render(<App />);
    const menuItem = screen.getByText("Your notifications");
    fireEvent.click(menuItem);
    const notifications = screen.getByTestId("Notifications");
    expect(notifications).toBeInTheDocument();
  });

  test("handleHideDrawer sets displayDrawer to false", () => {
    render(<App />);
    const menuItem = screen.getByText("Your notifications");
    fireEvent.click(menuItem); // Opens the drawer
    const closeButton = screen.getByRole("button", { name: "Close" });
    fireEvent.click(closeButton); // Closes the drawer
    const notifications = screen.queryByTestId("Notifications");
    expect(notifications).toBeNull();
  });

  test('contains the Header component with the correct title', () => {
    render(<App />);

    // Find the main header by using getAllByRole and then filtering
    const headings = screen.getAllByRole('heading');

    // Check if the main header with text 'School dashboard' exists
    const mainHeader = headings.find((heading) =>
      heading.textContent === 'School dashboard'
    );
    expect(mainHeader).toBeInTheDocument();
  });

  test('renders the BodySectionWithMarginBottom components correctly', () => {
    render(<App />);

    // Check for specific headings introduced by BodySectionWithMarginBottom
    expect(screen.getByText('Log in to continue')).toBeInTheDocument();
    expect(screen.getByText('News from the School')).toBeInTheDocument();
  });

  test('contains the Footer component', () => {
    render(<App />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  describe('when isLoggedIn is false', () => {
    test('renders the Login component and not CourseList', () => {
      render(<App isLoggedIn={false} />);
      const login = screen.getByTestId('Login');
      expect(login).toBeInTheDocument();
      expect(screen.queryByTestId('CourseList')).not.toBeInTheDocument();
    });
  });

  /*
    describe('when isLoggedIn is true', () => {
      test('renders the CourseList component and not Login', () => {
        render(<App isLoggedIn={true} />);
        const courseList = screen.getByTestId('CourseList');
        expect(courseList).toBeInTheDocument();
        expect(screen.queryByTestId('Login')).not.toBeInTheDocument();
      });
    });

    test('calls logOut and shows alert on Control + h keypress', () => {
      const logOutMock = jest.fn();
      const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

      render(<App logOut={logOutMock} />);
      fireEvent.keyDown(document, { key: 'h', ctrlKey: true });

      expect(alertMock).toHaveBeenCalledWith('Logging you out');
      expect(logOutMock).toHaveBeenCalled();

      alertMock.mockRestore();
    });
  */
});
