import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
function ReservetionE(props) {
    const [options,setOptions] = useState([
        {
        carid: "",
        bandcar: "",
        status: "",
        username: "",
        details: "",
     }])
     const [name,setName] = useState('')
const [date,setDate] = useState('')
const [time,setTime] = useState('')
const [detail,setDetil] = useState('')
console.log(props.customerId)
const [carid,setCarid] = useState('')
    useEffect(() => {
        LoadData2();
      }, []);
      
  const handleSubmit = async (e) => {
   
    e.preventDefault();

    
    axios
      .post("http://localhost:3001/createreservetion", {
        name: name,
        date: date,
        time: time, 
        detail:detail,
        username:props.customerId,
        carid:carid
      })
      .then((res) => {
        console.log(res.data);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
    const LoadData2 = async () => {
        axios
          .get("http://localhost:3001/car/" + props.customerId)
          .then((res) => {
          
            setOptions(res.data);
            console.log(res.data);
        
          })
          .catch((err) => {
            console.log(err);
          });
      };
  return (
    <>
    <div className="big">
    <div className="ct">
      <div className="ct2">
        <form>
        <div className="mb-3">
            <label className="form-label">Select Car</label>
          
            <select className="form-control"  onChange={e=>setCarid(e.target.value)} >
            {options.map((item, index) => {
              return <>
               <option key={index} value={item.carid}>
                {item.carid} {item.bandcar} {item.details}</option>
              </>
             
            })}
             
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">วันที่ต้องการจอง</label>
            <input
              type="date"
              className="form-control"
              onChange={(event) => {
                  setDate(event.target.value);
                }}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">เวลาที่ต้องการจอง</label>
            <input type="time" className="form-control" 
                 onChange={(event) => {
                  setTime(event.target.value);
                }}/>
          </div>
        
  
          <div className="mb-3">
            <label className="form-label">Sevice</label>
          
            <select className="form-control" value={name} onChange={e=>setName(e.target.value)} >
            <option >เลือก service</option>
            <option >ล้างทำความสะอาดภายนอกเเละภายใน</option>
              <option >ถ่ายน้ำมันเครื่องของเหลวต่างๆ</option>
              <option >ตรวจเช็คสภาพ</option>
              <option >เปลี่ยนยางเปลี่ยนอะไหล่</option>
              <option >อื่นๆ </option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label"value="dsad">รายละเอียด</label>
            <input type="tel" className="form-control"      onChange={(event) => {
                  setDetil(event.target.value);
                }}/>
          </div>

          <div className="mb-3 form-check">
            <div className="si">
              <div>
                <p></p>
              </div>
            </div>
          </div>
          <div className="submib">
          <button type="button" class="btn btn-danger bt"  onClick={handleSubmit}>submit</button>
           
          </div>
          <div className="mb-3 form-check">
            <div className="si">
              <div>
                <p></p>
              </div>
            </div>
          </div>
          <div className="mb-3 form-check">
            <div className="si">
              <div>
                <p></p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</>
  )
}
export default ReservetionE