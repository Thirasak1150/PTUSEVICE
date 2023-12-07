import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Css/Carshow.css";
function Editp(data) {
  const id = data.data.id_member;

  const [isTog3, setIsTog3] = useState(false);
  const [editde, setDe] = useState("");
  const [editid, setEditid] = useState("");
  const [check, setScheck] = useState(false);
  const [datae, setDatae] = useState([
    {
      carid: "",
      bandcar: "",
      surname: "",
      status: "",
      username: "",
      details: "",
    },
  ]);
  const [from, setFrom] = useState({
    carid: "",
    bandcar: "",
    surname: "",
    status: "",
    username: "",
    details: "",
  });

  useEffect(() => {
    LoadData();
  }, []);

  const LoadData = async () => {
    axios
      .get("http://localhost:3001/car/" + data.data.username)
      .then((res) => {
        if (res.data.length == 0) {
          setScheck(true);
        }
        setDatae(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(from);
    axios
      .put("http://localhost:3001/carupdate/" + from.carid, from)
      .then((res) => {
        console.log(res.data);
        LoadData();
        window.location = "/ProfileC/"+data.data.id_member;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChange = (e) => {
    setFrom({
      ...from,
      [e.target.name]: e.target.value,
    });
  };
  const t =()=> {
    return (
      <>
        <div className="row df s md0">
          <div className="md">
            <h1 style={{ marginTop: "30px" }}>
              แก้ไขข้อมูลรถยนต์ ID ที่ {from.carid}
            </h1>
          </div>
          <div className="md">
            <div className="col-3 menu c lidetail">
              <ul>
                <li>bandcar</li>

                <li>รายละเอียดรุ่น</li>
              </ul>
            </div>
            <div className="col-3 menu show margint">
              <ul>
                <li>
                  <input
                    type="text"
                    className="form-control"
                    name="bandcar"
                    placeholder={from.bandcar}
                    onChange={(e) => handleChange(e)}
                  />
                </li>

                <li>
                  <input
                    type="text"
                    className="form-control"
                    name="details"
                    placeholder={from.details}
                    onChange={(e) => handleChange(e)}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="b">
          <button type="submit" className="bt" onClick={handleSubmit}>
            บันทึกข้อมูลรถ
          </button>
        </div>
      </>
    );
  }
  function de(id) {
    console.log("id " + id);
    axios
      .delete("http://localhost:3001/carremove/" + id)
      .then((res) => {
        console.log(res);
        LoadData();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function s(id) {
    setEditid(id);
    console.log("Edit "+editid);

    datae.map((item, i) => {
      if (item.carid == editid) {
        setFrom(datae[i]);
        setIsTog3(true);
      }
    });

   
  }
  function che() {
    return (
      <>
        <div className="d">
          <div className="col-3 menu c">
            <ul>
              <li style={{ background: "Green" }}>
                ไม่มีข้อมูลรถยนต์กรุณาเพิ่ม!
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="ma">
        {check && che()}
        {datae.map((item, index) => {
          return (
            <div className="k" key={index}>
              <div className="row df s">
                <div className="d">
                  <div className="col-3 menu c">
                    <ul>
                      <li>carid</li>
                      <li>bandcar</li>
                      <li>status</li>
                      <li>รายละเอียดรุ่น</li>
                    </ul>
                  </div>
                  <div className="col-3 menu show margint">
                    <ul>
                      <li> {item.carid} </li>
                      <li>{item.bandcar}</li>
                      <li>{item.status}</li>
                      <li>{item.details}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="b">
                <button
                  type="submit"
                  className="bt"
                  onClick={() => s(item.carid)}
                >
                  แก้ไขรถ carID:{item.carid}
                </button>
              </div>
              <div className="b">
                <button
                  type="submit"
                  className="bt"
                  onClick={() => de(item.carid)}
                >
                  ลบรถ ID{item.carid}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div>{isTog3 && t()}</div>
    </>
  );
}

export default Editp;
