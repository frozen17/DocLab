import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SignUpApi = (props) => {
  useEffect(() => {
    const postData = {
      email: "email@simplejwtlogin.com",
      password: "345210mirlan",
      AUTH_CODE: "THISISMySpeCiaLAUthCode",
    };

    axios
      .post("http://backdoclab.vr.kg/?rest_route=/simple-jwt-login/v1/users", postData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true, // Enable sending cookies along with the request
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return null; // Since no JSX is being rendered
};

export default SignUpApi;
