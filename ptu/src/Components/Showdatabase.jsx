import React, { useEffect, useState } from "react";

import axios from "axios";

function Showdatabase() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({});

  useEffect(() => {
    LoadData();
  }, []);

  const LoadData = async () => {
    axios.get("http://localhost:3001/member")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(form)
    axios
      .post("http://localhost:3001/create", form)
      .then((res) => {
        console.log(res.data);
        LoadData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRemove = async (id) => {
    axios
      .delete("http://localhost:3001/member/" + id)
      .then((res) => {
        console.log(res);
        LoadData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
     
      <table>

      
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>id    {item.id_member}</td>
                <td> fname   {item.fname}</td>
                <td>  surname  {item.surname}</td>
                <td> username  {item.username}</td>
                <td> tel_member {item.tel_member}</td>
                <td> password {item.password}</td>
                <td onClick={() => handleRemove(item.id_member)}>Delete</td>
                <td>
                  <Link to={"/edit/" + item.id_member}>edit</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Showdatabase;
