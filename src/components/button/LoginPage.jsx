import React from "react";
import { TextBox } from "./TextBox";
import { Button } from "./Button";
import MonogramWhite from "../../assets/MonogramWhite.svg";
import LogIn from "../../assets/LogIn.png";

export function LoginPage({ mode, textbox, button }) {
  return (
    <div class={mode}>
      <img class="illustration" src={LogIn}></img>
      <div class="background">
        <div class="gradient"></div>
        <div class="image"></div>
      </div>
      <div class="container">
        <img class="monogram -primary" src={MonogramWhite} alt="logo" />
        <div class="title">Sign in to your account</div>
        <div class="subtitle">
          <span>Or start your</span> <a href="#"> 7-day trial!</a>
        </div>
        <div class="login-container">
          <TextBox style={textbox} input="Email Address" type="text" />
          <TextBox style={textbox} input="Password" type="password" />
          <div class="actions">
            <label>
              <input type="checkbox" id="remember" value="off" />
              <span>Remember Me</span>
            </label>
            <a class="forgot" href="#">
              {" "}
              Forgot your password?
            </a>
          </div>
        </div>
        <Button style={button} />
      </div>
    </div>
  );
}
