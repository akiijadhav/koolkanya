import React, { useState, useEffect } from "react";
//styles
import './Community.scss';


const Community = () => {
    //hold data here to dosplay on the page <-- get it from local storage for now & not route
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [pan, setPan] = useState("");

  useEffect(() => {
    //set local storage values to a state
    let name = localStorage.getItem("FullName");
    setName(name);

    let email = localStorage.getItem("Email");
    setEmail(email);

    let mobile = localStorage.getItem("Mobile");
    setMobile(mobile);

    let pan = localStorage.getItem("Pan");
    setPan(pan);

  }, []);

  return (
    <div className="communityContainer">
      <div className="displayData">
        {name === null && email === null && mobile === null && pan === null ? (
          <div className="dataMsg">
          <h2 className="text">Put some details in form & see them here</h2>
          </div>
        ) : (
          <div className="dataMsg">
            <h2 className="text">Name : {name} </h2>
            <h2 className="text">Email : {email} </h2>
            <h2 className="text">Mobile : {mobile} </h2>
            {pan ? (
              <div className="dataMsg">
              <h2 className="text">PAN : {pan} </h2>
              
              </div>
            ) : (
              <div className="dataMsg">
              <h2 className="text">Oops! No PAN details found..</h2>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Community;
