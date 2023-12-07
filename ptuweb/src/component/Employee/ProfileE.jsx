import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import EditproE from "./EditproE";


function ProfileE() {
    const params = useParams();
    const id = params.id;
    
    const [isTog,setIsTog] = useState(false)

    const navigate = useNavigate();
    // const [e, serE] = useState("");
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
          {isTog && <EditproE  data={data} />}
        
       
      </>
    );
  }

export default ProfileE