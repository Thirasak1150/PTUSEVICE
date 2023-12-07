import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../Css/Sevice.css";
import { useParams } from "react-router-dom";
import "../../Css/Serviceall.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import ReservetionE from "./ReservetionE";
function Readse() {
    const params = useParams();
    const username = params.id;
    const [dataservice, Setdataservice] = useState([]);
    useEffect(() => {
        Loadsevice();
      }, [username]);
    
  const Loadsevice = () => {
    axios
      .get("http://localhost:3001/readusernameservice/" + username)
      .then((res) => {
        Setdataservice(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
    <div className="header">
          <h1 className="profile">Service </h1>
        </div>
    <div className="boxzero">
      <div className="boxone">
      
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">รายการที่ทำ</th> 
          
              <th scope="col">CustomerId</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Status</th>
              <th scope="col"></th>
              <th scope="col"></th>
             
            </tr>
          </thead>
          <tbody>
            {dataservice.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{item.servicename}</th>
                 
                  <th scope="row">{item.usernamecustomer}</th>
                  <th scope="row">{item.date}</th>
                  <th scope="row">{item.time}</th>
              
                  <th scope="row">{item.statusservice} </th>
              
              
                   
                   
                    
                   
                </tr>
                
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  
   </>
  )
}

export default Readse