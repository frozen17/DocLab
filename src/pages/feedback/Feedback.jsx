import React from "react";
import "./Feedback.css";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const Feedback = () => {
  return (
    <Container sx={{ pb: 10, margin: "0 auto"}}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={6}>
          <div className="popup">
            <form className="form">
              <div className="note">
                <label className="title">НАШИ КОНТАКТЫ</label>
                <label className="title"><span>Свяжись</span> уже сегодня</label>
              </div>
              <input
                type="text"
                placeholder="Ваше имя"
                className="input_field"
                required
              />
              <input
                placeholder="Enter your e-mail"
                title="Ваш e-mail"
                name="email"
                type="email"
                className="input_field"
                required
              />
              <input
                placeholder="Enter your e-mail"
                title="Ваш вопрос"
                name="email"
                type="email"
                className="input_field"
                required
              />
              <button
                style={{
                  margin: "0 auto",
                }}
                className="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className="popup">
            <form className="form">
              <div className="note">
                <label className="title">СВЯЗАТЬСЯ С НАМИ</label>
              </div>
              <input
                type="text"
                placeholder="Ваше имя*"
                className="input_field"
                required
              />
              <input
                placeholder="Ваш e-mail*"
                title="e-mail"
                name="email"
                type="email"
                className="input_field"
                required
              />
              <input
                placeholder="Ваш вопрос*"
                title="вопрос"
                name="email"
                type="text"
                className="input_field"
                required
              />
              <button
                style={{
                  margin: "0 auto",
                }}
                className="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Feedback;