
import React, { useState } from "react";
import axios from "axios";
function Editp(data) {
 const id =data.data.id_member;
  
  const [datae, setDatae] = useState({
    id_member:id,
    fname: data.data.fname,
    surname: data.data.surname,
    username: data.data.username,
    tel_member: data.data.tel_member,
    password: data.data.password,
  });
  const handleChange = (e) => {
    setDatae({
      ...datae,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(datae)
    axios
      .put("http://localhost:3001/Customer/"+id, datae)
      .then((res) => {
        console.log(res.data);
        window.location = "/ProfileC/"+data.data.id_member;
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
               Username
             </label>
             <input
               type="text"
               className="form-control"
               name="username"
               placeholder={data.data.username}
               onChange={(e) => handleChange(e)}
             />
           </div>
           <div className="mb-3">
             <label  className="form-label">
               ชื่อจริง
             </label>
             <input
               type="text"
               className="form-control"
               name="fname"
               placeholder={data.data.fname}
               onChange={(e) => handleChange(e)}
             />
           </div>
           <div className="mb-3">
             <label  className="form-label">
               นามสกุล
             </label>
             <input
               type="text"
               className="form-control"
               name="surname"
               placeholder={data.data.surname}
               onChange={(e) => handleChange(e)}
             />
           </div>
           <div className="mb-3">
             <label  className="form-label">
               เบอร์โทรศัพท์
             </label>
             <input
               type="tel"
               className="form-control"
               name="tel_member"
               placeholder={data.data.tel_member}
               onChange={(e) => handleChange(e)}
             />
           </div>
           <div className="mb-3">
             <label  className="form-label">
               password
             </label>
             <input
               type="tel"
               name="password"
               className="form-control"
              
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

export default Editp