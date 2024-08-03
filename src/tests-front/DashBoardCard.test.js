import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import DashBoardCard from '../shared/component/DashBoardCard';

// Mock the useNavigate hook to simulate navigation
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('DashBoardCard Component', () => {
  test('should render the component with given props', () => {
    render(
      <Router>
        <DashBoardCard
          isDarkMode={false}
          redirect="/pagesList"
          title="Liste Des pages"
          text="Accéder à la liste de toutes les pages de ce projet"
          icon="bi bi-folder-fill"
        />
      </Router>
    );

    // Check if the text description is correctly returned:
    expect(screen.getByText('Liste Des pages')).toBeInTheDocument();
  });

  test('should navigate to the correct path when clicked', () => {
    const mockNavigate = jest.fn();
    require('react-router-dom').useNavigate.mockImplementation(() => mockNavigate);

    render(
      <Router>
        <DashBoardCard
          isDarkMode={false}
          redirect="/pagesList"
          title="Liste Des pages"
          text="Accéder à la liste de toutes les pages de ce projet"
          icon="bi bi-folder-fill"
        />
      </Router>
    );

    // Simulate a click event on the DashBoardCard
    fireEvent.click(screen.getByText('Liste Des pages'));

    // Verify that navigate has been called with the correct path
    expect(mockNavigate).toHaveBeenCalledWith('/pagesList');
  });
});
