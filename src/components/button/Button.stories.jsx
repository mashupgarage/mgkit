import React from 'react';
import '../../stylesheets/button.scss';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button
};

export const Primary = () => <Button style="kit-button"/>;
export const PrimaryMedium = () => <Button style="kit-button -medium"/>;
export const PrimarySmall = () => <Button style="kit-button -small"/>;
export const Alt = () => <Button style="kit-button -alt"/>;
export const AltMedium = () => <Button style="kit-button -alt -medium"/>;
export const AltSmall = () => <Button style="kit-button -alt -small"/>;
export const Disabled = () => <Button style="kit-button -disabled"/>;
export const Line = () => <Button style="kit-button -line"/>;
export const Light = () => <Button style="kit-button -light"/>;
export const LightAlt = () => <Button style="kit-button -lightalt"/>;
export const LightLine = () => <Button style="kit-button -lightline"/>;
