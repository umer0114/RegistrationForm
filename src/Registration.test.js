import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event'; // Import userEvent
import { RegistrationForm } from './Registration'; // Adjust the import path as needed

describe('RegistrationForm Component', () => {
// Mock the window.alert function to prevent it from actually running
    let alertMock; 
    beforeEach(() => {
        alertMock = jest.spyOn(window, 'alert').mockImplementation();
    });
    afterEach(() => {
        // Clean up the mock
        alertMock.mockRestore();
    });

  test.skip('renders the registration form fields', () => {
    render(<RegistrationForm />);

    // Assert that all fields and buttons are present in the document
    expect(screen.getByTestId('firstName')).toBeInTheDocument();
    expect(screen.getByTestId('lastName')).toBeInTheDocument();
    expect(screen.getByTestId('email')).toBeInTheDocument();
    expect(screen.getByTestId('password')).toBeInTheDocument();
    expect(screen.getByTestId('rPassword')).toBeInTheDocument();
    expect(screen.getByTestId('dateID')).toBeInTheDocument();
    expect(screen.getByTestId('register')).toBeInTheDocument();
  });

  test('submits the form with user input', () => {
    render(<RegistrationForm />);

    // Use userEvent.type to simulate typing into input fields
    userEvent.type(screen.getByTestId('firstName'), 'John');
    userEvent.type(screen.getByTestId('lastName'), 'Doe');
    userEvent.type(screen.getByTestId('email'), 'john@example.com');
    userEvent.type(screen.getByTestId('password'), 'password123');
    userEvent.type(screen.getByTestId('rPassword'), 'password123');
    userEvent.type(screen.getByTestId('dateID'), '1990-01-01');

    // Submit the form
    userEvent.click(screen.getByTestId('register'));

    // Check that the alert was called
    expect(alertMock).toHaveBeenCalled();
  });

  test.skip('form submission not allowed if password mismatch', () => {
    render(<RegistrationForm />);

    // Simulate typing mismatching passwords
    userEvent.type(screen.getByTestId('firstName'), 'John');
    userEvent.type(screen.getByTestId('lastName'), 'Doe');
    userEvent.type(screen.getByTestId('email'), 'john@example.com');
    userEvent.type(screen.getByTestId('password'), 'password123');
    userEvent.type(screen.getByTestId('rPassword'), 'password1');
    userEvent.type(screen.getByTestId('dateID'), '1990-01-01');

    // Trigger form submission
    userEvent.click(screen.getByTestId('register'));

    // Check if the helper text displays the mismatch error message
    expect(alertMock).not.toHaveBeenCalled();
  });

  test.skip('form submission not allowed if invalid email address', () => {
    render(<RegistrationForm />);

    // Simulate typing invalid email
    userEvent.type(screen.getByTestId('email'), 'invalid-email');

    // Submit the form
    userEvent.click(screen.getByTestId('register'));

    // Expect the email field to show an error message
    expect(alertMock).not.toHaveBeenCalled();
  });
});
