import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../Css/Sevice.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function SeviceE() {
  const wt = new Date();

  const params = useParams();
  const Employeeid = params.id;
  console.log("ide " + Employeeid);
  const [countcarpart, SetCountcarpart] = useState();
  const [username, setUsername] = useState("0");
  const [carid, setCarid] = useState("");
  const [detaill, setDetaill] = useState("");
  const [distance, setDistance] = useState();
  const [datacarpart, serDatacarpart] = useState([
    {
      namecarpart: "",
      carpartid: "",
      quantity: "",
    },
  ]);

  const [Carpartidset, setCarpartid] = useState("");
  const [nameservice, setNameservice] = useState("");
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displaydate =
      wt.getDate() + "/" + wt.getMonth() + "/" + wt.getFullYear();
    const displayTime = wt.getHours() + "/" + wt.getMinutes();
    const checkdate = displaydate;
    console.log(displaydate);
    console.log(displayTime);
    axios
      .post("http://localhost:3001/createservice", {
        usernamecustomer: username,
        employeeid: Employeeid,
        date: displaydate,
        servicename: nameservice,
        carpartid: Carpartidset,
        detail: detaill,
        distance: distance,
        time: displayTime,
        carid: carid,
        quantity: countcarpart,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .put("http://localhost:3001/Deletestock", {
        deletequantity: countcarpart,
        carpartid: Carpartidset,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:3001/readidervice", {
        usernamecustomer: username,
        employeeid: Employeeid,
        date: checkdate,
        carpartid: Carpartidset,
        distance: distance,
        carid: carid,
      })
      .then((Response) => Response.json())
      .then((res) => {
        console.log(res.serviceid);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    Loadid();
    Loadcarparts();
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
            </div>
            <div className="mb-3">
              <label className="form-label">ระยะทาง</label>
              <input
                type="text"
                name="password"
                className="form-control"
                onChange={(event) => {
                  setDistance(event.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Sevice</label>

              <select
                className="form-control"
                value={nameservice}
                onChange={(e) => setNameservice(e.target.value)}
              >
                <option>เลือกรายการบริการ</option>
                <option>ล้างทำความสะอาดภายนอกเเละภายใน</option>
                <option>ถ่ายน้ำมันเครื่องของเหลวต่างๆ</option>
                <option>ตรวจเช็คสภาพ</option>
                <option>เปลี่ยนยางเปลี่ยนอะไหล่</option>
                <option>อื่นๆ </option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Carpart</label>

              <select
                className="form-control"
                onChange={(e) => setCarpartid(e.target.value)}
              >
                {datacarpart.map((item, index) => {
                  return (
                    <>
                      <option key={index} value={item.carpartid}>
                        {item.namecarpart}
                      </option>
                    </>
                  );
                })}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">จำนวนอะไหล่ที่ใช้</label>
              <input
                type="text"
                name="password"
                className="form-control"
                onChange={(event) => {
                  SetCountcarpart(event.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">รายละเอียดเพิ่มเติม</label>
              <input
                type="text"
                name="password"
                className="form-control"
                onChange={(event) => {
                  setDetaill(event.target.value);
                }}
              />
            </div>
          </form>
          <div className="submibb a">
            <button type="submit" className="btservice" onClick={handleSubmit}>
              ยืนยัน
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeviceE;
