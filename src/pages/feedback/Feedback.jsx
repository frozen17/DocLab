import React from "react";
import "./Feedback.css";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const Feedback = () => {
  return (
    <Container sx={{ pb: 10, margin: "0 auto"}}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={6}>
          <div class="popup">
            <form class="form">
              <div class="note">
                <label class="title">НАШИ КОНТАКТЫ</label>
                <label class="title"><span>Свяжись</span> уже сегодня</label>
              </div>
              <input
                type="text"
                placeholder="Ваше имя"
                class="input_field"
                required
              />
              <input
                placeholder="Enter your e-mail"
                title="Ваш e-mail"
                name="email"
                type="email"
                class="input_field"
                required
              />
              <input
                placeholder="Enter your e-mail"
                title="Ваш вопрос"
                name="email"
                type="email"
                class="input_field"
                required
              />
              <button
                style={{
                  margin: "0 auto",
                }}
                class="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div class="popup">
            <form class="form">
              <div class="note">
                <label class="title">СВЯЗАТЬСЯ С НАМИ</label>
              </div>
              <input
                type="text"
                placeholder="Ваше имя*"
                class="input_field"
                required
              />
              <input
                placeholder="Ваш e-mail*"
                title="e-mail"
                name="email"
                type="email"
                class="input_field"
                required
              />
              <input
                placeholder="Ваш вопрос*"
                title="вопрос"
                name="email"
                type="text"
                class="input_field"
                required
              />
              <button
                style={{
                  margin: "0 auto",
                }}
                class="submit"
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