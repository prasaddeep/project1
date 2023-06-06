import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ContactList = () => {
  const [condata, condatachange] = useState(null);
  const navigate = useNavigate();

  const LoadDetail = (id) => {
    navigate("/contact/detail/" + id);
  };
  const LoadEdit = (id) => {
    navigate("/contact/edit/" + id);
  };
  const RemoveFunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:8000/contact/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    fetch("http://localhost:8000/contact")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        condatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Contact List</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="contact/create" className="btn btn-success">
              Add New Contact (+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Phone</td>
                <td>Email</td>
                <td>Address</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {condata &&
                condata.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>{item.address}</td>
                    <td>
                      <a
                        onClick={() => {
                          LoadEdit(item.id);
                        }}
                        className="btn btn-success"
                      >
                        Edit
                      </a>
                      <a
                        onClick={() => {
                          RemoveFunction(item.id);
                        }}
                        className="btn btn-danger"
                      >
                        Remove
                      </a>
                      <a
                        onClick={() => {
                          LoadDetail(item.id);
                        }}
                        className="btn btn-primary"
                      >
                        Details
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
