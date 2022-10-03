import React from 'react';
import '../../stylesheets/signup.scss';
import '../../stylesheets/textbox.scss';
import '../../stylesheets/button.scss';
import { SignupPage } from './SignupPage';


export default {
  title: 'Templates/Sign Up',
  component: SignupPage
};

const Template = (args) => <SignupPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  mode: "sign-up",
  textbox: "kit-textbox -signup",
  button: "kit-button -signup",
};