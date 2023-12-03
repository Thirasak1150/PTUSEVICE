import React from "react";
import './Css/Sign.css'

import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


export default function Sign() {


  const [username, setUsername] = useState("");
  const [u,setU] = useState("")
  const [fname, setFname] = useState("");
  const [f,setF] = useState("")
  const [surname, setSurname] = useState("");
  const [s,setS] = useState("")
  const [tel_member, setTel] = useState("");
  const [t,setT] = useState("")
  const [password, setPassword] = useState("");
  const [p,setP] = useState("")
  const [e,setE] = useState("")
  const addMember = (e) => {
    e.preventDefault();

    if(username == '' || fname == '' ||  surname == '' ||  password == '' || tel_member == '' ){
        
      
     
      if(username == ''){
        setU("กรุณากรอก username")
      }
      if(fname == ''){
        setF("กรุณากรอกชื่อจริง")
      }
      if(surname == ''){
        setS("กรุณากรอกนามสกุล")
      }
      if(password == ''){
        setP("กรุณากรอกรหัสผ่าน")
      }
      if(tel_member == ''){
        setT("")
      }
      if(username != ''){
        setU("")
      }
      if(fname != ''){
        setF("")
      }
      if(surname != ''){
        setS("")
      }
      if(password != ''){
        setP("")
      }
      if(tel_member != ''){
        setT("")
      }
    }
    else{
      axios
      .post("http://localhost:3001/create", {
        username: username,
        fname: fname,
        surname: surname,
        password: password,
        tel_member: tel_member,
      })
      
      .then((data) => {
        const datac = data.data.message
        if(datac == 'me user'){
          setE('มีคน username นี้เเล้ว!')
        }
        else{
          alert('สมัครสำเร็จ')
          window.location =( "/");
        }
      
      })
    }
   
    
   
  };
  return (
    <>
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
                // placeholder="username"
                required
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              /><a className="er" href="#">{u}</a>
            </div>
            <div className="mb-3">
              <label  className="form-label">
                ชื่อจริง
              </label>
              <input
                type="text"
                className="form-control"
                required
                onChange={(event) => {
                  setFname(event.target.value);
                }}
              /><a className="er" href="#">{f}</a>
            </div>
            <div className="mb-3">
              <label  className="form-label">
                นามสกุล
              </label>
              <input
                type="text"
                className="form-control"
                required
                onChange={(event) => {
                  setSurname(event.target.value);
                }}
              /><a className="er" href="#">{s}</a>
            </div>
            <div className="mb-3">
              <label  className="form-label">
                เบอร์โทรศัพท์
              </label>
              <input
                type="tel"
                className="form-control"
                required
                onChange={(event) => {
                  setTel(event.target.value);
                }}
              /><a className="er" href="#">{t}</a>
            </div>
            <div className="mb-3">
              <label className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                required
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <a className="er" href="#">{p}</a>
            </div>
            <div className="mb-3 form-check">
              <div className="si">
                <div>
                  <a className="er" href="#">{e}</a>
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
    </>
  );
}
