import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ConDetail = () => {
  const { conid } = useParams();

  const[condata,condatachange]=useState({});

  useEffect(() => {
    fetch("http://localhost:8000/contact/"+conid)
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
  return(
    <div>
      <div className="card" style={{"textAlign":"left"}}>
        <h2>Contact Create</h2>
        <div className="card-body"></div>
      
      { condata &&
      <div>
      <h1>The Contact name is : {condata.name} ({condata.id})</h1>
      <h3>Contact Details</h3>
      <h5>Phone is : {condata.phone}</h5>
      <h5>Email is : {condata.email}</h5>
      <h5>Address is : {condata.address}</h5>
      <Link className="btn btn-danger" to="/">Back to Listing</Link>
      </div>
      }
    </div>
    </div>
  );
}

export default ConDetail;
