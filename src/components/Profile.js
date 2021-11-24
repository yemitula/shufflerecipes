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
          <strong>{currentUser.firstname}'s</strong> Details
        </h3>
      </header>
      <table className="table table-striped">
        <tbody>
          <tr>
            <td>ID</td>
            <td>
              <strong>{currentUser.id}</strong>
            </td>
          </tr>
          <tr>
            <td>Username</td>
            <td>
              <strong>{currentUser.username}</strong>
            </td>
          </tr>
          <tr>
            <td>First name</td>
            <td>
              <strong>{currentUser.firstname}</strong>
            </td>
          </tr>
          <tr>
            <td>Last name</td>
            <td>
              <strong>{currentUser.lastname}</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
