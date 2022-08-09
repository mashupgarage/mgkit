import React from 'react';
import '../../stylesheets/textbox.scss';
import { TextBox } from './TextBox';

export default {
  title: 'Components/Textbox',
  component: TextBox
};

export const Primary = () => <TextBox style="kit-textbox" input="Input placeholder text here" type="text" />;
export const PrimaryLight = () => <TextBox style="kit-textbox -light" input="Input placeholder text here" type="text"/>;
export const PrimarySearch = () => <TextBox style="kit-textbox -search" input="Input placeholder text here" type="text"/>;
export const PrimarySearchLight = () => <TextBox style="kit-textbox -search -light" input="Input placeholder text here" type="text"/>;
export const Disabled = () => <TextBox style="kit-textbox -disabled" input="Input placeholder text here" type="text"/>;
export const Error = () => <TextBox style="kit-textbox -error" input="Input placeholder text here" type="text"/>;
export const PrimaryPassword = () => <TextBox style="kit-textbox -password" input="Input placeholder text here" type="password"/>;

