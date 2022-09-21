import React from 'react';
import '../../stylesheets/button.scss';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button
};

export const Primary = () => <Button style="kit-button" label="Button"/>;
export const PrimaryMedium = () => <Button style="kit-button -medium" label="Button"/>;
export const PrimarySmall = () => <Button style="kit-button -small" label="Button"/>;
export const Alt = () => <Button style="kit-button -alt" label="Button"/>;
export const AltMedium = () => <Button style="kit-button -alt -medium" label="Button"/>;
export const AltSmall = () => <Button style="kit-button -alt -small" label="Button"/>;
export const Disabled = () => <Button style="kit-button -disabled" label="Button"/>;
export const Line = () => <Button style="kit-button -line" label="Button"/>;
export const Light = () => <Button style="kit-button -light" label="Button"/>;
export const LightAlt = () => <Button style="kit-button -lightalt" label="Button"/>;
export const LightLine = () => <Button style="kit-button -lightline" label="Button"/>;
