import React, { useState, useEffect } from 'react';

const SignUpApi = (props) => {
  const [urlToLogin, setUrlToLogin] = useState('');

  useEffect(() => {
    if (props.APIDetailsSignUp.user.length > 0) {
      let formData = new FormData();
      formData.append('user', props.APIDetailsSignUp.user);
      formData.append('email', props.APIDetailsSignUp.email);
      formData.append('pass', props.APIDetailsSignUp.pass);

      const url = 'http://localhost:3000/';
      fetch(url, {
        method: 'POST',
        headers: {
          "Content-type": "application/x-www-form-urlencoded"
        },
        body: formData
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          if (data['success'] === true) {
            setUrlToLogin(`http://backdoclab.vr.kg/?rest_route=/simple-jwt-login/v1/autologin&jwt=${data['data']['jwt']}`);
            console.log(data);
            console.log(data['data']['jwt']);
          } else {
            console.log(data);
            console.log(data['data']['message']);
          }
        })
        .catch((error) => {
          console.error('Error in API call:', error);
          // Add additional error handling here if needed
          console.log('Response status:', error.response.status);
          console.log('Response body:', error.response.json());
        });
    }
  }, [props.APIDetailsSignUp]);

  useEffect(() => {
    if (urlToLogin.length > 0) {
      fetch(urlToLogin, {
        method: 'GET'
      })
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            throw new Error('Network response was not ok');
          }
        })
        .then((data) => {
          props.setIsLoggedIn(true);
          props.setUsername(props.APIDetailsSignUp.user);
          console.log('User successfully logged in:', data);
        })
        .catch((error) => {
          console.error('Error in auto-login:', error);
        });
    }
  }, [urlToLogin]);

  return null; // Since no JSX is being rendered
};

export default SignUpApi;
