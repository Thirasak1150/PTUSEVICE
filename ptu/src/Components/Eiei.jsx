
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";


function Eiei() {
  const params = useParams();
  const id =params.id
  const navigate = useNavigate();
  const [data, setData] = useState({
    fname: "",
    surname: "",
    username: "",
    PASSWORD: "",
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

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {

    axios.put("http://localhost:3001/member/" +id, data).then((res) => {
    console.log(res.data);
        
      })
      .catch((err) => console.log(err));
      navigate("/Showdatabase");
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fname"
            value={data.fname}
            onChange={(e) => handleChange(e)}
          />
          <br />
          <input
            type="text"
            name="surname"
            value={data.surname}
            onChange={(e) => handleChange(e)}
          />
          <br />
          <input
            type="text"
            name="username"
            value={data.username}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            name="PASSWORD"
            value={data.PASSWORD}
            onChange={(e) => handleChange(e)}
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default Eiei;
