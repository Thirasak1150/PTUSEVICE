import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../Css/Sevice.css";
function Editmember() {
  const [datamember, Setdatamember] = useState([]);
  const [datamem,setdatamem] = useState([])
  const [username,setusername] = useState('')
  const [check,setcheck] = useState(true)
  const [check2,setcheck2] = useState(false)
  useEffect(() => {

    Loadlist()
  }, []);

  const SMember = () => {
    setcheck(false)
    setcheck2(true)
    console.log("dasd"+username)
    axios
      .get("http://localhost:3001/readusername/" + username)
      .then((res) => {
        console.log(res.data);
        setdatamem(res.data)
        setcheck(false)
        setcheck2(!check2)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const Loadlist = async() => {
    axios
      .get("http://localhost:3001/member/")
      .then((res) => {
        Setdatamember(res.data);
        console.log(res.data);
   
 
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const CustomerEdit = (username) => {
    console.log(username)
    axios
      .put("http://localhost:3001/positionCustomer/" + username)
      .then((res) => {
        console.log(res.data);
        Loadlist();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  const Smemberall = () => {
    return (
      <>
       
        <div style={{ textAlign: "center", fontSize: "20px" }}>
          <div>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">name</th>
                  <th scope="col">surname</th>
                  <th scope="col">username</th>
                  <th scope="col">tel</th>
                  <th scope="col">position</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {datamem.map((item, index) => {
                  return (
                    <>
                      <tr>
                        <th scope="row">{item.fname}</th>
                        <td>{item.surname}</td>
                        <td>{item.username}</td>
                        <td>{item.tel_member}</td>
                        <td>{item.assess_right}</td>
                        <td>
                          <div className="btddddd">
                            <button type="button" class="btn btn-dark"
                            onClick={() => EmployeeEdit(item.username)}
                            >
                              Edit To Employee
                            </button>
                            <button
                              type="button"
                              class="btn btn-info"
                              onClick={() => CustomerEdit(item.username)}
                            >
                              Edit To Customer
                            </button>
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        
        </>
  )
  }

  const listmemberall = () => {
    return(
        
    <>
  
      <div style={{ textAlign: "center", fontSize: "20px" }}>
        <div>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">name</th>
                <th scope="col">surname</th>
                <th scope="col">username</th>
                <th scope="col">tel</th>
                <th scope="col">position</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {datamember.map((item, index) => {
                return (
                  <>
                    <tr>
                      <th scope="row">{item.fname}</th>
                      <td>{item.surname}</td>
                      <td>{item.username}</td>
                      <td>{item.tel_member}</td>
                      <td>{item.assess_right}</td>
                      <td>
                        <div className="btddddd">
                          <button type="button" class="btn btn-dark"
                          onClick={() => EmployeeEdit(item.username)}
                          >
                            Edit To Employee
                          </button>
                          <button
                            type="button"
                            class="btn btn-info"
                            onClick={() => CustomerEdit(item.username)}
                          >
                            Edit To Customer
                          </button>
                        </div>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
    
   
  };
  const EmployeeEdit = (username) => {
    console.log(username)
    axios
      .put("http://localhost:3001/positionEmployee/" + username)
      .then((res) => {
        console.log(res.data);
        Loadlist();
      })
      .catch((err) => {
        console.log(err);
      });
  };
 
  return(<>
  
  <div className="header">
          <h1 className="profile">EDITMEMBER</h1>
        </div>
  
        <div className="ct" style={{ marginTop: "50px" }}>
          <div className="mb-3">
            <input
              style={{ padding: "10px 80px", textAlign: "center" }}
              type="text"
              className="form-control"
              placeholder="username"
              
              required
              onChange={(event) => {
              setusername(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="ct">
          <div className="mb-3">
            <button
              type="button"
              className="btn btn-outline-success"
              style={{ padding: "10px 80px", textAlign: "center" }}
              onClick={() => SMember()}
            >
              Success
            </button>
          </div>
        </div>
        {check && listmemberall()}
        {check2 && Smemberall()}
 
  </>)
}

export default Editmember;
