import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../Css/Sevice.css";
import { useParams } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";

function Serviceall() {
  
  const params = useParams();
  const customerid = params.id;
  const [dateservice,Setdateservice] = useState({
    serviceid: "",
    usernamecustomer: "",
    employeeid: "",
    date:"",
    servicename:"",
  carpartid: "",
    quantit: "",
    detail: "",
    distance: "",
    time: "",
    carid: "",
  })
  useEffect(() => {
    Loadservice();
    
  }, [customerid]);

  const Loadservice = () => {
    axios
      .get("http://localhost:3001/readidervice/"+customerid)
      .then((res) => {
        Setdateservice(res.data[0])
        console.log(res.data[0]);
       

      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
    <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </>
  )
}

export default Serviceall