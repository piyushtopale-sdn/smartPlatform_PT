import React from 'react';
import './App.css'; // Import the CSS

const App = () => {
  const users = [
    { id: 1, name: 'Alice Johnson', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Bob Smith', role: 'Editor', status: 'Inactive' },
    { id: 3, name: 'Charlie Davis', role: 'Viewer', status: 'Active' },
  ];

  return (
    <div className="user-management-container">
      <h1 className="user-management-title">
        User Management (Custom Pod)
      </h1>
      <p className="user-management-description">
        Manage users, assign roles, and control access levels within your application.
      </p>

      <div className="table-wrapper">
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>
                  <span className={`status-badge ${user.status.toLowerCase()}`}>
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
