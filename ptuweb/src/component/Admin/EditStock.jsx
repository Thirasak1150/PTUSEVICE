import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function EditStock() {
    const [datamember, Setdatamember] = useState([]);
    const [fromcarpart, Setdfromcarpart] = useState({

        namecarpart:"",
        quantity:""
    });
    const [check,setcheck] = useState(false)
    useEffect(() => {

        Loadlist()
      }, []);

      const Loadlist = async() => {
        axios
          .get("http://localhost:3001/stock")
          .then((res) => {
            Setdatamember(res.data);
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      
      const c = ()=>{
            setcheck(!check)

      }
      const f = ()=>{
        const handleChange = (e) => {
            Setdfromcarpart({
              ...fromcarpart,
              [e.target.name]: e.target.value,
            });
          };
        const handleSubmit = async (e) => {
            e.preventDefault();
        
            console.log(fromcarpart)
            axios
              .post("http://localhost:3001/createstock", fromcarpart)
              .then((res) => {
                console.log(res.data);
                Loadlist()
                setcheck(!check)
              })
              .catch((err) => {
                console.log(err);
              });
          };
        return(<>
  
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
               placeholder="ชื่ออะไหล่"
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
               placeholder="จำนวนอะไหล่"
               onChange={(e) => handleChange(e)}
             />
           </div>
          
      
           <div className="submib">
           <button type="button" class="btn btn-success bt" onClick={handleSubmit}>Success</button>
            
           </div>
         </form>
       </div>
     </div>
   </div>
        </>)

  }
      const De = (carpaid) => {
        console.log(carpaid)
        axios
          .delete("http://localhost:3001/removestock/"+carpaid)
          .then((res) => {
           
            console.log(res.data);
            Loadlist()

          })
          .catch((err) => {
            console.log(err);
          });
      };
  return (
    < >
      <div className="header" >
          <h1 className="profile">EDITSTOCK</h1>
        </div>
        <div className="ct" style={{marginTop:"30px"}}>
          <div className="mb-3">
            <button
              type="button"
              className="btn btn-outline-success"
              style={{ padding: "10px 80px", textAlign: "center" }}
              onClick={() => c()}
            >
              เพิ่มอะไหล่
            </button>
          </div>
        </div>
        {check && f()}
     <div style={{ textAlign: "center", fontSize: "20px" }}>
          <div>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">carpartid</th>
                  <th scope="col">namecarpart</th>
                  <th scope="col">quantitiy</th>
                  <th scope="col"></th>
              
                </tr>
              </thead>
              <tbody>
    {datamember.map((item,index)=>{
        return(<>
         <tr>
                       
                        <td>{item.carpartid}</td>
                        <td>{item.namecarpart}</td>
                        <td>{item.quantity}</td>
                        
                        <td>
                          <div className="btddddd">
                            <Link to={"/JoinEditstock/"+item.carpartid}><button type="button" class="btn btn-dark"
                           
                            >
                              Edit Quantity
                            </button>
                            </Link>
                            <button
                              type="button"
                              class="btn btn-danger"
                              onClick={() => De(item.carpartid)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
        </>)
    })}
    </tbody>
            </table>
          </div>
        </div>
    </>
  )
}

export default EditStock