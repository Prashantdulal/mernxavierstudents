import React from "react";
import { useState } from "react";
// import css
import "../components/Signup.css";


import { useHistory } from "react-router-dom";
function Signup() {

  document.title = "Add Record | Xavier";
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    id: "",
    sec: "",
    address: "",
    intrest: "",
    phone: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);

    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, id, sec, intrest, address, phone } = user;

    const resp = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        id,
        sec,
        intrest,
        address,
        phone,
      }),
    });

    const data = await resp.json();

    console.log(data);
    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("registeration successful");

      // history.push("/");
    }
  };

  return (
    <div>
          <form method="POST" className="loginform" id="loginfrm">
      <div id=" form" className="form">
        <div className="title">Xavier International College</div>
        <div className="subtitle">Student's Information</div>
        <div className="input-container ic1">
          <input
            id="name"
            name="name"
            autoComplete="off"
            value={user.name}
            onChange={handleInputs}
            className="input"
            type="text"
            placeholder=" "
          />
          <div className="cut"></div>
          <label htmlFor="firstname" className="placeholder">
            Enter your name
          </label>
        </div>
        <div className="input-container ic1">
          <input
            id="email"
            name="email"
            autoComplete="off"
            value={user.email}
            onChange={handleInputs}
            className="input"
            type="text"
            placeholder=" "
          />
          <div className="cut"></div>
          <label htmlFor="firstname" className="placeholder">
            Enter your Email Id (Personal Email)
          </label>
        </div>
        <div className="input-container ic1">
          <input
            id="id"
            name="id"
            autoComplete="off"
            value={user.id}
            onChange={handleInputs}
            className="input"
            type="text"
            placeholder=" "
          />
          <div className="cut"></div>
          <label htmlFor="firstname" className="placeholder">
            Enter your id(College Email)
          </label>
        </div>
        <div className="input-container ic1">
          <input
            id="sec"
            name="sec"
            autoComplete="off"
            value={user.sec}
            onChange={handleInputs}
            className="input"
            type="text"
            placeholder=" "
          />
          <div className="cut"></div>
          <label htmlFor="firstname" className="placeholder">
            Enter your section
          </label>
        </div>
        <div className="input-container ic1">
          <input
            id="intrest"
            name="intrest"
            autoComplete="off"
            value={user.intrest}
            onChange={handleInputs}
            className="input"
            type="text"
            placeholder=" "
          />
          <div className="cut"></div>
          <label htmlFor="firstname" className="placeholder">
            Enter your intrest
          </label>
        </div>
        <div className="input-container ic1">
          <input
            id="address"
            name="address"
            autoComplete="off"
            value={user.address}
            onChange={handleInputs}
            className="input"
            type="text"
            placeholder=" "
          />
          <div className="cut"></div>
          <label htmlFor="firstname" className="placeholder">
            Enter your address
          </label>
        </div>
        <div className="input-container ic1">
          <input
            id="phone"
            name="phone"
            autoComplete="off"
            value={user.phone}
            onChange={handleInputs}
            className="input"
            type="text"
            placeholder=" "
          />
          <div className="cut"></div>
          <label htmlFor="firstname" className="placeholder">
            Enter your phone Number
          </label>
        </div>
        <div>
          <input
            type="submit"
            name="addRecord"
            id="addRecord"
            className="submit"
            value="Add Record"
            onClick={PostData}
          />
        </div>
      </div>
     
    </form>
    <button className="submitnew" onClick={()=>{
      history.push("/");
    }}>View Records</button>
    </div>

  );
}
export default Signup;
