
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function JoinEditstock() {

    const params = useParams();
    const id = params.id;
    const [datacarpart, Setdatacarpart] = useState({});
    useEffect(() => {

        Loadlist()
      }, []);

      const Loadlist = async() => {
        axios
          .get("http://localhost:3001/stock/"+id)
          .then((res) => {
            Setdatacarpart(res.data[0]);
            console.log(res.data[0]);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      const handleChange = (e) => {
        Setdatacarpart({
          ...datacarpart,
          [e.target.name]: e.target.value,
        });
      };
      
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(datacarpart)
    axios
      .put("http://localhost:3001/updatestock/", datacarpart)
      .then((res) => {
        console.log(res.data);
        window.location = "/EditStock";
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
             <label  className="form-label">
               ชื่อ
             </label>
             <input
               type="text"
               className="form-control"
               name="namecarpart"
               placeholder={datacarpart.namecarpart}
               onChange={(e) => handleChange(e)}
             />
           </div>
           <div className="mb-3">
             <label  className="form-label">
               จำนวน
             </label>
             <input
               type="text"
               className="form-control"
               name="quantity"
               placeholder={datacarpart.quantity}
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
  )
}

export default JoinEditstock