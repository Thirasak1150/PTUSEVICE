import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../Css/Sevice.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Addservice(props) {
  const wt = new Date();
 
 const Employeeid = props.employeeid
 const CustomerId = props.customerId
 console.log("Employeeid"+Employeeid)
 console.log("CustomerId"+CustomerId)
  const  [s1,sets1]= useState('')
  const [s2,sets2]= useState('')
  const [s3,sets3]= useState('')
  const [s5,sets5]= useState('')
  const [s4,sets4]= useState('')
  const [s6,sets6]= useState('')
  const [countcarpart, SetCountcarpart] = useState("");
  const [username, setUsername] = useState("");
  const [carid, setCarid] = useState("");
  const [detaill, setDetaill] = useState("");
  const [distance, setDistance] = useState("");
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

  const displaydate =
      wt.getDate() + "/" + wt.getMonth() + "/" + wt.getFullYear();
    const displayTime = wt.getHours() + ":" + wt.getMinutes();
    const checkdate = displaydate;
    const checkTime = displayTime
    console.log("check nameservice: "+nameservice)
    console.log("check username: "+CustomerId)
    console.log("check Employeeid: "+Employeeid)
    console.log("check checkdate: "+checkdate)
    console.log("check checkTime: "+checkTime)
    console.log("check Carpartidset: "+Carpartidset)
    console.log("check distance: "+distance)
    console.log("check carid: "+carid)
    console.log("check countcarpart: "+countcarpart)
    console.log(" ")
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(CustomerId == ''){
      sets1(' กรุณากรอก username')
    }
    else if(carid == ''){
      sets2(' กรุณาเลือกรถยนต์ที่ต้องการใช้บริการ')
  }
  else if(distance == ''){
    sets3('   กรุณากรอกระยะทางที่รถยนต์ใช้ไป')
}
else if(nameservice == ''){
  sets4(' กรุณาเลือก service') 
}
else if(Carpartidset == ''){
   sets5('กรุณาเลือก อะไหล่') 
}
else if(countcarpart == ''){
  sets6(' กรุณากรอกจำนวนอะไหล่ที่ใช้') }
  else{
    axios
    .post("http://localhost:3001/createservice", {
      usernamecustomer: CustomerId,
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
     
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err);
    });
 
    window.location =("/Serviceall/"+CustomerId+"/"+Employeeid);
  }
   
    
  };
  useEffect(() => {
    Loadid();
    Loadcarparts();
  }, [username]);

  const Loadid = () => {
    axios
      .get("http://localhost:3001/carusername/" + CustomerId)
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
     
      <div className="ct">
        <div className="ct2">
          <form>
        
            <div className="mb-3">
              <label className="form-label">Select Car </label> <label className="form-label">{s2} </label>

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
              <label className="form-label">ระยะทาง </label> <label className="form-label"> {s3} </label>
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
              <label className="form-label">Sevice </label> <label className="form-label"> {s4} </label>

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
              <label className="form-label">Carpart </label> <label className="form-label"> {s5} </label>

              <select
                className="form-control"
                value={Carpartidset}
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
              <label className="form-label">จำนวนอะไหล่ที่ใช้ </label> <label className="form-label"> {s6} </label>
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

export default Addservice;
