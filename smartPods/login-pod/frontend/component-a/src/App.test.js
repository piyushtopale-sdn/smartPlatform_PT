import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the main title and description', () => {
  render(<App />);
  expect(screen.getByText(/User Management \(Custom Pod\)/i)).toBeInTheDocument();
  expect(
    screen.getByText(/Manage users, assign roles, and control access levels within your application./i)
  ).toBeInTheDocument();
});

test('renders table headers', () => {
  render(<App />);
  expect(screen.getByText('Name')).toBeInTheDocument();
  expect(screen.getByText('Role')).toBeInTheDocument();
  expect(screen.getByText('Status')).toBeInTheDocument();
});

test('renders all users with correct roles and statuses', () => {
  render(<App />);
  expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
  expect(screen.getByText('Admin')).toBeInTheDocument();
  expect(screen.getAllByText('Active').length).toBeGreaterThan(0);

  expect(screen.getByText('Bob Smith')).toBeInTheDocument();
  expect(screen.getByText('Editor')).toBeInTheDocument();
  expect(screen.getByText('Inactive')).toBeInTheDocument();

  expect(screen.getByText('Charlie Davis')).toBeInTheDocument();
  expect(screen.getByText('Viewer')).toBeInTheDocument();
});

test('status badges have correct class names', () => {
  render(<App />);
  const activeBadges = screen.getAllByText('Active');
  activeBadges.forEach(badge => {
    expect(badge.className).toMatch(/status-badge active/);
  });
  const inactiveBadge = screen.getByText('Inactive');
  expect(inactiveBadge.className).toMatch(/status-badge inactive/);
});