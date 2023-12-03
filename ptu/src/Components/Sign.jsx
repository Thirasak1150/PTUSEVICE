import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios  from "axios";


export default function Sign() {

  const [member, setMember] = useState([]);
  const [username, setUsername] = useState("");
  const [fname, setFname] = useState("");
  const [surname, setSurname] = useState("");
  const [tel_member, setTel] = useState("");
  const [password, setPassword] = useState("");
  const addMember = () => {
    axios
      .post("http://localhost:3001/create", {
        username: username,
        fname: fname,
        surname: surname,
        password: password,
        tel_member: tel_member,
      })
      .then(() => {
        setMember([
          ...member,
          {
            username: username,
            fname: fname,
            surname: surname,

            password: password,
            tel_member: tel_member,
          },
        ]);
      });
   
  };
  return (
    <div className="big">
     
      <div className="ct">
        <div className="ct2">
          <form>
            <div className="mb-3">
              <label  className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="username"
                required
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label  className="form-label">
                ชื่อจริง
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(event) => {
                  setFname(event.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label  className="form-label">
                นามสกุล
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(event) => {
                  setSurname(event.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label  className="form-label">
                เบอร์โทรศัพท์
              </label>
              <input
                type="tel"
                className="form-control"
                onChange={(event) => {
                  setTel(event.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <div className="mb-3 form-check">
              <div className="si">
                <div>
                  <p>
                    me user <Link to="/">login</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="submib">
              <button type="submit" className="bt " onClick={addMember}>
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
