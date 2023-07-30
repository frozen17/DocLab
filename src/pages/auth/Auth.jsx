import React, { useState } from "react";
import "./Auth.css";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SignIn from "./SignIn";
import SignUp from "../signup/SignUp";

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const Auth = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ margin: "150px auto" }}>
      <Box
        sx={{
          width: "100%",
          margin: "150px auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Sign IN" />
          <LinkTab label="Sign UP" />
        </Tabs>
        {console.log(value)}
        <div className="container-auth" id="container-auth">
          {value === 0 && <SignIn />}

          {value === 1 && <SignUp />}
        </div>
      </Box>
    </div>
  );
};

export default Auth;
