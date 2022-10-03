import React from 'react';
import '../../stylesheets/login.scss';
import '../../stylesheets/textbox.scss';
import '../../stylesheets/button.scss';
import { LoginPage } from './LoginPage';



export default {
  title: 'Templates/Log In',
  component: LoginPage
};

const Template = (args) => <LoginPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  mode: "log-in",
  textbox: "kit-textbox",
  button: "kit-button -login",
};
