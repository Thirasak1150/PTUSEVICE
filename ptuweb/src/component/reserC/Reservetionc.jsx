import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
function Reservetionc() {
   
 const [options,setOptions] = useState([
    {
    carid: "",
    bandcar: "",
    status: "",
    customerid: "",
    details: "",
 }])
  const params = useParams();
  const username = params.id;
  const [isTog, setIsTog] = useState(false);
  const [isTog2, setIsTog2] = useState(false);
  const [datareservetion, setReservetion] = useState([]);
const [name,setName] = useState('')
const [date,setDate] = useState('')
const [time,setTime] = useState('')
const [detail,setDetil] = useState('')
const [carid,setCarid] = useState('')
console.log("name "+name)
console.log("date "+date)
console.log("time "+time)
console.log("detail "+detail)
console.log("carid s"+carid)

  useEffect(() => {
    LoadData();
    LoadData2();
  }, []);

  const LoadData = async () => {
    axios
      .get("http://localhost:3001/readreservetion/" + username)
      .then((res) => {
        setReservetion(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const LoadData2 = async () => {
    axios
      .get("http://localhost:3001/car/" + username)
      .then((res) => {
      
        setOptions(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSubmit = async (e) => {
   
    e.preventDefault();

    
    axios
      .post("http://localhost:3001/createreservetion", {
        name: name,
        date: date,
        time: time, 
        detail:detail,
        username:username,
        carid:carid
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  function reservetionshow() {
    return (
      <>
        {datareservetion.map((item, index) => {
          return (
            <div className="k" key={index}>
              <div className="row df s">
                <div className="d">
                  <div className="col-3 menu c">
                    <ul>
                      <li>name</li>
                      <li>date</li>
                      <li>time</li>
                      <li>datail</li>
                      <li>id Reservetion</li>
                    </ul>
                  </div>
                  <div className="col-3 menu show margint">
                    <ul>
                      <li> {item.name} </li>
                      <li>{item.date}</li>
                      <li>{item.time}</li>
                      <li>{item.detail}</li>
                      <li>{item.reservetionid}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
  function regisreservetion() {
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
                     <option key={index} value={item.carid}>{item.carid} {item.bandcar} {item.details}</option>
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
                  <button type="submit" className="bt " onClick={handleSubmit}>
                    submit
                  </button>
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
    );
  }
  return (
    <>
      <div className="header">
        <h1 className="profile">Reservetion</h1>
      </div>
      <div className="mb-3 form-check">
        <div className="si">
          <div>
            <p></p>
          </div>
        </div>
      </div>
      <div className="b">
        <button type="submit" className="bt" onClick={() => setIsTog(!isTog)}>
          รายละเอียดการจอง
        </button>
      </div>

      {isTog && reservetionshow()}

      <div className="b">
        <button type="submit" className="bt" onClick={() => setIsTog2(!isTog2)}>
          จองคิว
        </button>
      </div>
      {isTog2 && regisreservetion()}
    </>
  );
}

export default Reservetionc;
