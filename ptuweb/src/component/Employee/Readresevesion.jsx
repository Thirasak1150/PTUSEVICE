import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../Css/Sevice.css";
import { useParams } from "react-router-dom";
import "../../Css/Serviceall.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import ReservetionE from "./ReservetionE";
function Readresevesion() {
    const params = useParams();
  const Employee = params.id;

    console.log(Employee)
  const [resevetion, Setresevetion] = useState([]);
  const [username, setUsername] = useState("");
  const [isTog, setIsTog] = useState(false);
  const [isTog2, setIsTog2] = useState(false);
  const [isTog3, setIsTog3] = useState(false);
  const [isTog4, setIsTog4] = useState(false);
  const [listreser,setlistre] = useState([])
  const Updatestatus = (id) => {
    console.log("id " + id);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success btdd",
        cancelButton: "btn btn-danger btdd",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes Success ",
        cancelButtonText: "No Success",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Update  completed",
            text: "Your Update Status completed",
            icon: "success",
          });
          axios
            .put("http://localhost:3001/updatestatusservice", {
              serviceid: id,
              status: "เสร็จเเล้ว",
            })
            .then((res) => {
              console.log(res);
              Loaddataservice();
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
            icon: "error",
          });
        }
      });
  };
  useEffect(() => {
    Loadlist();
  }, []);

  const Deleteservice = (id) => {
    console.log("id " + id);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success btdd",
        cancelButton: "btn btn-danger btdd",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes Success ",
        cancelButtonText: "No Success",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Update  completed",
            text: "Your Update Status completed",
            icon: "success",
          });
          axios
            .delete("http://localhost:3001/removereservetion/" + id)
            .then((res) => {
              console.log(res);
              Loadresevetion();
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
            icon: "error",
          });
        }
      });
  };
  const Loadresevetion = () => {
    axios
      .get("http://localhost:3001/readreservetion/" + username)
      .then((res) => {
        Setresevetion(res.data);
        console.log(res);
        setIsTog(true);
        setIsTog4(!isTog4)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const Loadlist = () => {
    axios
      .get("http://localhost:3001/listreservetion")
      .then((res) => {
        setlistre(res.data);
        console.log("ch "+res.data);
        setIsTog4(!isTog4)
      })
      .catch((err) => {
        console.log(err);
      });
  };  const showlistre = () => {
   return(<>
    <div className="boxzero">
          <div className="boxone">
            <table className="table ">
              <thead>
                <tr>
                  <th scope="col">ต้องการทำ</th>

                  <th scope="col">Date</th>
                  <th scope="col">Username</th>
                  <th scope="col">Time</th>
                  <th scope="col">รายละเอียด</th>
                  <th scope="col">เบอร์โทรศัพท์</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              
                {listreser.map((item, index) => {
                  return (
                    <tbody>
                    <tr key={index}>
                      <th scope="row">{item.name}</th>

                      <th scope="row">{item.date}</th>
                      <th scope="row">{item.customerid}</th>
                      <th scope="row">{item.time}</th>

                      <th scope="row">{item.carid} </th>
                      <th scope="row">{item.tel} </th>
                      <th scope="row">
                        <Link to={"/Servicereservetion/"+item.reservetionid+"/"+Employee}><button
                          type="button"
                          class="btn btn-warning"
                          
                        >
                          Service
                        </button></Link>

                        <button
                          type="button"
                          className="btn btn-danger btdd"
                          onClick={() => Deleteservice(item.reservetionid)}
                        >
                          Delete
                        </button>

                  
                      </th>
                    </tr>
                    </tbody>
                  );
                })}
             
            </table>
          </div>
        </div>
   
   </>)
  };
  const Check = () => {
    return (
      <>
               <div className="mb-3 Serviceallbt">
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => setIsTog3(!isTog3)}
              >
                จองคิวให้ลูกค้า username:{username}
              </button>
         
             
            </div>
            {isTog3 && <ReservetionE  customerId={username}/> }
        <div className="boxzero">
          <div className="boxone">
            <table className="table ">
              <thead>
                <tr>
                  <th scope="col">ต้องการทำ</th>

                  <th scope="col">Date</th>
                  <th scope="col">Username</th>
                  <th scope="col">Time</th>
                  <th scope="col">รายละเอียด</th>
                  <th scope="col">เบอร์โทรศัพท์</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              
                {resevetion.map((item, index) => {
                  return (
                    <tbody>
                    <tr key={index}>
                      <th scope="row">{item.name}</th>

                      <th scope="row">{item.date}</th>
                      <th scope="row">{item.username}</th>
                      <th scope="row">{item.time}</th>

                      <th scope="row">{item.carid} </th>
                      <th scope="row">{item.tel} </th>
                      <th scope="row">
                        <Link to={"/Servicereservetion/"+item.reservetionid+"/"+Employee}><button
                          type="button"
                          class="btn btn-warning"
                          
                        >
                          Service
                        </button></Link>

                        <button
                          type="button"
                          className="btn btn-danger btdd"
                          onClick={() => Deleteservice(item.reservetionid)}
                        >
                          Delete
                        </button>

                  
                      </th>
                    </tr>
                    </tbody>
                  );
                })}
             
            </table>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="header">
        <h1 className="profile">นัดหมายลูกค้า</h1>
      </div>
      <div className="ct">
        <div className="ct2">
          <form>
            <div className="mb-3">
              <input
                type="tel"
                name="password"
                placeholder="                            usernamecustomer"
                style={{ backgroundColor: "brown", color: "white" }}
                className="form-control"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            </div>
            <div className="mb-3 Serviceallbt">
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => Loadresevetion()}
              >
                ค้นหา
              </button>
         
             
            </div>
           
            <div>{isTog2 && inputserivce()}</div>
          </form>
        </div>
      </div>
      <div>{isTog && Check()}</div>
      <div>{isTog4 && showlistre()}</div>
    </>
  );
}

export default Readresevesion;
