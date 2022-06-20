import React from "react";
import "../components/Login.css";
//import useHistory from react-router-dom
import { useHistory } from "react-router-dom";

import { useState } from "react";

const Login = () => {
  document.title = "View Records | Xavier";
  let history = useHistory();
  const [id, setId] = useState("");
  const [data, setData] = useState({});
  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });
    const data = await res.json();

    if (res.status === 400) {
      alert("Invalid Id");
    } else {
      // window.alert("Login Successful");
      console.log(data);
    }

    const getusers = async () => {
      try {
        const res = await fetch("/getusers", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        const data = await res.json();
        console.log(data);
        setData(data);
      } catch (err) {
        console.log(err);
      }
    };

    getusers();
  };

  return (
    <>
      <div>
        <form method="POST" className="loginform2" id="loginfrm">
          <div id="form" className="form2">
            <div className="title2">Xavier International College</div>
            <div className="subtitle2">Student's Information</div>
            <div className="input-container ic12">
              <input
                id="id"
                name="id"
                autoComplete="off"
                value={id}
                onChange={(e) => setId(e.target.value)}
                className="input2"
                type="text"
              />
              <div className="cut"></div>
              <label htmlFor="firstname" className="placeholder">
                Enter your id(College email)
              </label>
            </div>
          </div>
          <div>
            <input
              type="submit"
              name="addRecord"
              id="addRecord"
              className="submit2"
              value="View Info"
              onClick={loginUser}
            />
          </div>
        </form>
        <button className="new" onClick={() => history.push("/addrecord")}>
          Register Here
        </button>

        <div className="container2 glow">
          <h1 className="text">Name: :{data.name}</h1>
          <h1 className="text">Email :{data.email}</h1>
          <h1 className="text">Phone :{data.phone}</h1>
          <h1 className="text">Section :{data.sec}</h1>
          <h1 className="text">Intrest :{data.intrest}</h1>
          <h1 className="text">Address :{data.address}</h1>
          <h1 className="text">ID: :{data.id}</h1>
        </div>
      </div>
    </>
  );
};

export default Login;
