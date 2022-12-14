import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import AddContactsForm from "./components/AddContactsForm";
import Contacts from "./components/Contacts";

function App() {
  const [users, setUsers] = useState([
    {
      name: "RICK",
      phone: "0203445566",
      location: "Accra",
      id: "1659431731207",
    },
    {
      name: "DANNY",
      phone: "0203445566",
      location: "Accra",
      id: "1659431734534",
    },
  ]);

  const handleSubmit = (user) => {
    setUsers([
      ...users,
      {
        name: user.name,
        phone: user.phone,
        location: user.location,
        id: new Date().getTime().toString(),
      },
    ]);
  };

  const handleDeleteContact = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // edit user
  const handleEdit = (id, newInfo) => {
    setUsers(users.map((user) => (user.id === id ? newInfo : user)));
  };
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <AddContactsForm addContact={handleSubmit} />
          </div>
          <div className="col-md-6">
            <Contacts
              contactData={users}
              deleteUser={handleDeleteContact}
              handleEdit={handleEdit}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
