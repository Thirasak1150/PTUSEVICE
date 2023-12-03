import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Css/ProfileC.css";

function Status() {
  const [color,setColor] = useState([{
    colors:""
  }])
  const params = useParams();
  const id = params.id;
  const [datacar,setDatacar] = useState([ {
    carid: "",
    bandcar: "",
    surname: "",
    status: "",
    customerid: "",
    details: "",
  },])
  useEffect(() => {
    LoadData();
  }, []);

  const LoadData = async () => {
    axios
      .get("http://localhost:3001/car/" + id)
      .then((res) => {
        setDatacar(res.data);
        console.log(res.data);
       
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="header">
        <h1 className="profile">Statuscar</h1>
      </div>
      {datacar.map((item, index) => {
          return (
            <div className="k" key={index}>
              <div className="row df s">
                <div className="d">
                  <div className="col-3 menu c">
                    <ul>
                      <li>carid</li>
                      <li>bandcar</li>
                      <li >status</li>
                      <li>รายละเอียดรุ่น</li>
                    </ul>
                  </div>
                  <div className="col-3 menu show margint">
                    <ul>
                      <li> {item.carid} </li>
                      <li>{item.bandcar}</li>
                      <li>{item.status}</li>
                      <li>{item.details}</li>
                    </ul>
                  </div>
                </div>
              </div>
         
      
            </div>
          );
        })}
  


    </>
  )
}

export default Status