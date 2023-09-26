import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, FormControl, TextField } from "@mui/material";
import { Control_username } from "../Api/apiservices";
import { useNavigate } from "react-router-dom";

const Homepage = () => {

    const [username,setUserName] = useState("")
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {username}
        console.log(username)
        Control_username(data)
        .then((response) => {
          console.log(response.data);
          if(response.data.Msg === "Username Registered Successfully"){
            navigate("/home/form")
          }
        })
        .catch((err) => {
          console.log(err);
        });
        setUserName("")
    }
  return (
    <>
      <Box
        style={{marginTop:"10em",backGroundColor:"red"}}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            id="standard-basic"
            label="username..."
            variant="standard"
            value={username}
            onChange={(obj) => setUserName(obj.target.value)}
            required
          />
        </form>
      </Box>
    </>
  );
};

export default Homepage;
