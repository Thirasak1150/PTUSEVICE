import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import '../Css/Homes.css'
import { Link } from "react-router-dom";

function Homeadmin() {
  const params = useParams();
  const id = params.id;
  const [data, setData] = useState({
    assess_right:"",
    id_member:"",
    fname: "",
    surname: "",
    username: "",
    tel_member: "",
    password: "",
  });
  useEffect(() => {
    LoadData();
  }, [ params.id]);
  const LoadData = async () => {
    axios
      .get("http://localhost:3001/member/" + id)
      .then((res) => {
        setData(res.data[0]);
        console.log(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(()=>{
    const token = localStorage.getItem('token');
    
    fetch("http://localhost:3001/authen", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer '+token
        },
        
      }).then(Response=> Response.json())
      .then(data=> {
        if(data.status == 'ok'){
            
            // alert('authen sucess')
        } else {
            localStorage.removeItem('token')
            window.location = '/'
        }
      })
      .catch((error)=> {
        console.error('ERROR' ,error)
      });
},[])
  return (
    <>
    <Nav/>
    <div className="welcome">
      <div className="welcomebox">
        <h1>Welcome</h1>
        <h1>{data.fname+' '+data.surname} </h1>
      </div>
    </div>
    <div className="cont">
      <div className="conin">
           <Link to={"/Editmember"}>  <div className="btd"><button type="button" className="btn btn-danger bt">จัดการสิทธิ์สามาชิก</button></div></Link>
            <Link to="/EditStock">  <div className="btd"><button type="button" className="btn btn-danger bt">เพิ่ม-ลบ สินค้า</button></div></Link>
            <Link to="/EditStock"><div className="btd"><button type="button" class="btn btn-danger bt">เช็คอะไหล่</button></div></Link>
            <Link to={"/ProfileE/"+id}><div className="btd"><button type="button" className="btn btn-danger bt">
              โปรไฟล์
            </button></div></Link>
      </div>
    </div>
   
    
    </>
  )
}

export default Homeadmin