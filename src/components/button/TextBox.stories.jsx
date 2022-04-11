import React from 'react';
import '../../stylesheets/textbox.scss';
import { TextBox } from './TextBox';

export default {
  title: 'Textbox',
  component: TextBox
};

export const Primary = () => <TextBox style="kit-textbox"/>;
export const PrimaryLight = () => <TextBox style="kit-textbox -light"/>;
export const PrimarySearch = () => <TextBox style="kit-textbox -search"/>;
export const PrimarySearchLight = () => <TextBox style="kit-textbox -search -light"/>;
export const Disabled = () => <TextBox style="kit-textbox -disabled"/>;
export const Error = () => <TextBox style="kit-textbox -error"/>;
