import React from 'react';
import '../../stylesheets/dropdown.scss';
import { DropDown } from './DropDown';

export default {
  title: 'Drop Down',
  component: DropDown
};

export const Primary = () => <DropDown style="kit-dropdown"/>;
export const PrimaryLight = () => <DropDown style="kit-dropdown -light"/>;
export const PrimaryDisabled = () => <DropDown style="kit-dropdown -disabled"/>;
export const PrimaryLineless = () => <DropDown style="kit-dropdown -lineless"/>;
