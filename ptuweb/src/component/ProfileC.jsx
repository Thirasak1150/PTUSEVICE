import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Css/ProfileC.css";
import Editp from "./Editp";
import Carshow from "./Carshow"
import Addcar from "./addcar";


function ProfileC() {
  const params = useParams();
  const id = params.id;
  
  const [isTog,setIsTog] = useState(false)
  const [isTog2,setIsTog2] = useState(false)
  const [isTog3,setIsTog3] = useState(false)
  const [data, setData] = useState({
    id_member:id,
    fname: "",
    surname: "",
    username: "",
    tel_member: "",
    password: "",
  });

  useEffect(() => {
    LoadData();
  }, [params.id]);

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

  return (
    <>
      <div className="header">
        <h1 className="profile">Proflie</h1>
      </div>

      <div className="row df s">
        <div className="d">
          <div className="col-3 menu c">
            <ul>
              <li>username</li>
              <li>ชื่อจริง นามสกุล</li>
              <li>เบอร์โทรศัพท์</li>
             
            </ul>
          </div>
          <div className="col-3 menu show">
            <ul>
              <li> {data.username} </li>
              <li>
                {data.fname} {data.surname}
              </li>
              <li>{data.tel_member}</li>
           
            </ul>
          </div>
        </div>
       
       
      </div>
      <div className="b">
        <button type="submit" className="bt" onClick={()=>setIsTog(!isTog)}>
        แก้ไขโปรไฟล์
      </button>
        </div>
        {isTog && <Editp  data={data} />}
        <div className="b">
        <button type="submit" className="bt" onClick={()=>setIsTog2(!isTog2)}>
        เเสดงข้อมูลรถยนต์
      </button>
        </div>
        {isTog2 && <Carshow data={data}/> }
        <div className="b">
        <button type="submit" className="bt" onClick={()=>setIsTog3(!isTog3)}>
        เพิ่มรถยนต์
      </button>
        </div>
        {isTog3 && <Addcar data={data}/> }
     
    </>
  );
}

export default ProfileC;
