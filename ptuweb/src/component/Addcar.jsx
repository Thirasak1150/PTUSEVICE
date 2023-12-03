import React, { useState } from "react";
import axios from "axios";

function Addcar(data) {
    const id = data.data.id_member
    
  const [datae, setDatae] = useState({
    bandcar: "",
    details: "",
    customerid:data.data.id_member,
  });
  const handleChange = (e) => {
    setDatae({
      ...datae,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    console.log("datainput "+datae)
    e.preventDefault();

    
    axios
      .post("http://localhost:3001/carcreate", datae)
      .then((res) => {
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
                <label className="form-label">bandcar</label>
                <input
                  type="text"
                  className="form-control"
                  name="bandcar"
                  placeholder={"Toyota,Honda,Nisssan"}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">detailcar</label>
                <input
                  type="text"
                  className="form-control"
                  name="details"
                  placeholder={"รถ Honda civic  ปี 2020"}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="submib">
                <button type="submit" className="bt " onClick={handleSubmit}>
                  ยืนยัน
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addcar;
