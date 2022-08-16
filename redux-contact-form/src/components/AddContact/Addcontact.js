import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router";

// import { toast } from "react-toastify";

export const Addcontact = () => {
  const [contacts, setcontacts] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function setInput(e) {
    setcontacts({ ...contacts, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // const { name, email, phone } = contacts;
    // console.log(name, email, phone);
    console.log(contacts);

    axios
      .post("http://localhost:8080/add", contacts)
      .then((response) => {
        console.log(response);
      })
      .then((err) => {
        return err;
      });
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-2">Add Post</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Full name"
                name="name"
                value={contacts.name}
                onChange={(e) => setInput(e)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                name="email"
                value={contacts.email}
                onChange={(e) => setInput(e)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="number"
                placeholder="Phone"
                name="phone"
                value={contacts.phone}
                onChange={(e) => setInput(e)}
              />
            </div>
            <div className="form-group">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Add Student"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
