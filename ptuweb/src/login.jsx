import * as React from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Linkk from "@mui/material/Link";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import "./Css/login.css";
import Nav from "./component/Nav";

import Homeemployee from "./component/Homeemployee";
function Copyright(props) {
  return (
    
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {
  const [usedata, setUserdata] = useState([]);
  const [e,setE] = useState("")
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const jsonData = {
      username: data.get("username"),
      password: data.get("password"),
    };
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    })
      .then((Response) => Response.json())
      .then((data) => {
        if (data.status == "ok") {
          if (data.posision == "customer") {
            localStorage.setItem("token", data.token);
            // alert("login customer sucess "+data.id);
            window.location = ("/Homecustomer/"+data.id);
          } else if (data.posision == "employee") {
            localStorage.setItem("token", data.token);
            // alert("login  employee sucess ");
            window.location =( "/Homeemployee/"+data.id);
            
          }
          else if (data.posision == "admin") {
            localStorage.setItem("token", data.token);
            // alert("login  admin sucess ");
            window.location = "/Home/";
          }
        } else {
          setE("usernam or password  wrong!! ")
       

        }
      })
      .catch((error) => {
        console.error("ERROR", error);
      });
  };

  return (
  <>
    <div className="setdis">
      <Nav/>
        <div className="setdisin">
        <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              'url(https://i.ytimg.com/vi/n9oM3VgDeMo/maxresdefault.jpg)',
       
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
           
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                name="username"
                id="username"
                label="username"
                autoComplete="current-username"
                autoFocus
              />
             
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="text"
                id="password"
                autoComplete="current-password"
              />
              <div className="err">
                    <a href="#">{e}</a>
              </div>
            
              <div className="dis">
                <div className="dis1">
                  <button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className="bt "
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </button>
                </div>

                <div className="dis2">
                  <Link to="/Signin" variant="body2">
                    <a href="#">Don't have an account? Sign Up</a>
                  </Link>
                </div>
              </div>
              
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
        </div>
    </div>
  </>
    
  );
}
