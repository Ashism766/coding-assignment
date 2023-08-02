import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import apiCall from "./repository";
import {useNavigate} from "react-router-dom";


const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

    const navigate = useNavigate();

  const handleSubmit = async () =>{
    const res = await apiCall({username:credentials.username, password:credentials.password});
    console.log(res, "this is the response of the api call")
    if(res != null)
    {
      await localStorage.setItem('token', res);

      navigate("/dashboard");
    }
  }

  



  return (
    <div style={{height:"100vh", width:"100vw",}}>

    
    <Grid container spacing={2} sx={{pt:"20vh"}} justifyContent="center">

      <Grid item xs={4} container spacing={5} justifyContent="center">
        <Grid item xs={12}>
          <TextField
            fullWidth
            type="text"
            name="username"
            value={credentials.username}
            placeholder="Email"
            variant="outlined"

            onChange={(e)=>{setCredentials({...credentials, username:e.target.value})}}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            type="password"
            name="password"
            value={credentials.password}
           
           placeholder='password'
            variant="outlined"

            onChange={(e)=>{setCredentials({...credentials, password:e.target.value})}}
          />
        </Grid>
        <Grid item xs={12}>
          <Button onClick={handleSubmit} fullWidth type="submit" variant="contained" color="primary">
            Login
          </Button>
        </Grid>
      </Grid>
      </Grid>


      </div>
 
  );
};

export default Login;
