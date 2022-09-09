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
    id: "",
    score: "",
    position: "",

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

    const { name,  id, score,position } = user;

    const resp = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        score,
        id:id.trim(),
        position,
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
        <div className="title">Xavier Biology Olympiad</div>
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
          Team name
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
            Team Id
          </label>
          </div>
        {/* </div>
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
          </label> */}
        {/* </div> */}
        <div className="input-container ic1">
          <input
            id="score"
            name="score"
            autoComplete="off"
            value={user.score}
            onChange={handleInputs}
            className="input"
            type="text"
            placeholder=" "
          />
          <div className="cut"></div>
          <label htmlFor="firstname" className="placeholder">
            Score
          </label>
        </div>
        <div className="input-container ic1">
          <input
            id="position"
            name="position"
            autoComplete="off"
            value={user.position}
            onChange={handleInputs}
            className="input"
            type="text"
            placeholder=" "
          />
          <div className="cut"></div>
          <label htmlFor="firstname" className="placeholder">
            Position
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
