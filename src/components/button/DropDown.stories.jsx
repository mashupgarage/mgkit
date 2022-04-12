import React from 'react';
import '../../stylesheets/dropdown.scss';
import { DropDown } from './DropDown';

export default {
  title: 'Drop Down',
  component: DropDown
};

export const Primary = () => <DropDown style="kit-dropdown"/>;
export const PrimaryLineless = () => <DropDown style="kit-dropdown -lineless"/>;