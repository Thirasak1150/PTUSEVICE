import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../Css/Sevice.css";
import { useParams } from "react-router-dom";
import "../../Css/Serviceall.css";
import Swal from "sweetalert2";

function Checkservice() {
  const [dateservice, Setdateservice] = useState([]);
  const [username, setUsername] = useState("");
  const [isTog, setIsTog] = useState(false);
  const [isTog2, setIsTog2] = useState(false);
  const [dateservicee, Setdateservicee] = useState({});
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
            .delete("http://localhost:3001/removeservice/" + id)
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
  const Loaddataservice = () => {
    axios
      .get("http://localhost:3001/readusernameservice/" + username)
      .then((res) => {
        Setdateservice(res.data);
        console.log(res);
        setIsTog(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const Check = () => {
    return (
      <>
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
              
                {dateservice.map((item, index) => {
                  return (
                    <tbody>
                    <tr key={index}>
                      <th scope="row">{item.servicename}</th>

                      <th scope="row">{item.usernamecustomer}</th>
                      <th scope="row">{item.date}</th>
                      <th scope="row">{item.time}</th>

                      <th scope="row">{item.statusservice} </th>

                      <th scope="row">
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={() => Updatestatus(item.serviceid)}
                        >
                          Success
                        </button>

                        <button
                          type="button"
                          className="btn btn-danger btdd"
                          onClick={() => Deleteservice(item.serviceid)}
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
        <h1 className="profile">Check Service</h1>
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
                onClick={() => Loaddataservice()}
              >
                ค้นหา
              </button>
              
            </div>
            <div>{isTog2 && inputserivce()}</div>
          </form>
        </div>
      </div>
      <div>{isTog && Check()}</div>
      
    </>
  );
}

export default Checkservice;
