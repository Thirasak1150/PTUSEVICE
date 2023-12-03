import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../Css/Sevice.css";

import { Link } from "react-router-dom";

function SeviceE() {
  const [username, setUsername] = useState("0");
  const [carid, setCarid] = useState("");
  const [datacarpart, serDatacarpart] = useState([]);
  const [nameservice,setNameservice] = useState('')
  const [datae, setDatae] = useState([
    {
      carid: "",
      bandcar: "",
      surname: "",
      status: "",
      customerid: "",
      details: "",
    },
  ]);
  console.log(username);
  useEffect(() => {
    Loadid();
  }, [username]);
  const Loadid = () => {
    axios
      .get("http://localhost:3001/carusername/" + username)
      .then((res) => {
        setDatae(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const Loadcarparts = () => {
    axios
      .get("http://localhost:3001/stock")
      .then((res) => {
        serDatacarpart(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="header">
        <h1 className="profile">Service</h1>
      </div>
      <div className="ct">
        <div className="ct2">
          <form>
            <div className="mb-3">
              <label className="form-label">username</label>
              <input
                type="tel"
                name="password"
                className="form-control"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Select Car</label>

              <select 
                className="form-control"
                onChange={(e) => setCarid(e.target.value)}
              >
                {datae.map((item, index) => {
                  return (
                    <>
                      <option key={index} value={item.carid}>
                        {item.carid} {item.bandcar} {item.details}
                      </option>
                    </>
                  );
                })}
              </select>
            </div >
            <div className="mb-3">
            <label className="form-label">Sevice</label>
                
                <select className="form-control" value={nameservice} onChange={e=>setNameservice(e.target.value)} >
                <option >เลือกรายการบริการ</option>
                <option >ล้างทำความสะอาดภายนอกเเละภายใน</option>
                  <option >ถ่ายน้ำมันเครื่องของเหลวต่างๆ</option>
                  <option >ตรวจเช็คสภาพ</option>
                  <option >เปลี่ยนยางเปลี่ยนอะไหล่</option>
                  <option >อื่นๆ </option>
                </select>
            </div>
          </form>
          <div className="submibb a">
            <button type="submit" className="btservice">
              ยืนยัน
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeviceE;
