import React, { useEffect } from 'react'


function Homeadmin() {
    
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
            
            alert('authen sucess')
        } else {
            alert('authen failed')
            localStorage.removeItem('token')
            window.location = '/'
        }
       
      })
      .catch((error)=> {
        console.error('ERROR' ,error)
      });
},[])
  return (
    <div>Homeadmin</div>
  )
}

export default Homeadmin