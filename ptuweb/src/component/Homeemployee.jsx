
import axios from "axios";

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
function Homeemployee() {
  const params = useParams();
  const id =params.id
  const navigate = useNavigate();
  const [data, setData] = useState({
    fname: "",
    surname: "",
    username: "",
    tel:"",
    password: "",
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
  return (
    <div>Homeemployee</div>
  )
}

export default Homeemployee