import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../Css/Sevice.css";
import { useParams } from "react-router-dom";
import "../../Css/Serviceall.css"
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import Addservice from "./Addservice";

function Serviceall() {
  const params = useParams();
  const Customerid = params.id;
  const Employeeid = params.Em;
  const [dateservice, Setdateservice] = useState([]);
  const [istig,SetIsTing] = useState(false)

  console.log("customerid"+Customerid)
  console.log("Employeeid"+Employeeid)
  useEffect(() => {
    Loadservice();
  }, [Customerid]);

  const Loadservice = () => {
    axios
      .get("http://localhost:3001/readidervice/" + Customerid)
      .then((res) => {
        Setdateservice(res.data);
        console.log(res.data);
      
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const Updatestatus =  (id) => {
    console.log("id "+id)
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success btdd",
        cancelButton: "btn btn-danger btdd"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes Success ",
      cancelButtonText: "No Success",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          title: "Update  completed",
          text: "Your Update Status completed",
          icon: "success"
        });  axios
        .put("http://localhost:3001/updatestatusservice" ,{
          serviceid:id,
          status:"เสร็จเเล้ว"
        })
        .then((res) => {
          console.log(res);
          Loadservice()
          
        })
        .catch((err) => {
          console.log(err);
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your Cancelled Update Status",
          icon: "error"
        });
      }
    });
  }
  const Deleteservice =  (id) => {
    console.log("id "+id)
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success btdd",
        cancelButton: "btn btn-danger btdd"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes Success ",
      cancelButtonText: "No Success",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          title: "Update  completed",
          text: "Your Update Status completed",
          icon: "success"
        });  axios
        .delete("http://localhost:3001/removeservice/" +id)
        .then((res) => {
          console.log(res);
          Loadservice()
        
        })
        .catch((err) => {
          console.log(err);
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your Cancelled Update Status",
          icon: "error"
        });
      }
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
              {dateservice.map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{item.servicename}</th>
                   
                    <th scope="row">{item.usernamecustomer}</th>
                    <th scope="row">{item.date}</th>
                    <th scope="row">{item.time}</th>
                
                    <th scope="row">{item.statusservice} </th>
                
                      <th scope="row">
                      
                      <button type="button" className="btn btn-success"
                      onClick={() => Updatestatus(item.serviceid)}
                      >Success</button>
                     
                      <button type="button" className="btn btn-danger btdd"
                        onClick={() => Deleteservice(item.serviceid)}
                      >Delete</button>
                      </th>
                     
                     
                      
                     
                  </tr>
                  
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="Serviceallbt"> 
      <button type="button" className="btn btn-info" onClick={()=>SetIsTing(!istig)}>Add Service</button> 
      </div>
      {istig && <Addservice employeeid={Employeeid} customerId={Customerid}/> }
    </>
  );
}

export default Serviceall;
