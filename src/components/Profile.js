import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.firstname}'s</strong> Profile
        </h3>
      </header>
      <p>
        <strong>ID:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Username:</strong> {currentUser.username}
      </p>
      <p>
        <strong>Firstname:</strong> {currentUser.firstname}
      </p>
      <p>
        <strong>Last namee:</strong> {currentUser.lastname}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles.map((role, index) => (
          <li key={index}>{role}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
