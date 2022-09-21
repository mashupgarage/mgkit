import React from "react";
import { TextBox } from "./TextBox";
import { Button } from "./Button";
import MonogramWhite from "../../assets/MonogramWhite.svg";

export function SignupPage({ mode, textbox, button }) {
  return (
    <div class={mode}>
      <div class="background">
        <div class="gradient"></div>
        <div class="image"></div>
      </div>
      <div class="container">
        <img class="monogram -primary" src={MonogramWhite} alt="logo" />
        <div class="title">Create New Account</div>
        <div class="subtitle">
          <span>Already registered?</span>
          <a href="#"> Log In</a>
        </div>
        <div class="signup-container">
          <div class="row">
            <TextBox style={textbox} input="Email Address" type="text" />
          </div>
          <div class="row">
            <TextBox style={textbox} input="First Name" type="text" />
            <TextBox style={textbox} input="Last Name" type="text" />
          </div>
          <div class="row">
            <TextBox style={textbox} input="Password" type="password" />
            <TextBox style={textbox} input="Re-Enter Password" type="password"/>
          </div>
          <div class="row">
            <Button style={button} label="Create Account" />
          </div>
        </div>
      </div>
    </div>
  );
}
