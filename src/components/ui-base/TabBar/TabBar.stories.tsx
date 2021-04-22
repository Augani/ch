/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { withKnobs, select, array } from '@storybook/addon-knobs';
import { TabBar as XTabBar } from './Index';

export default {
  component: XTabBar,
  decorators: [withKnobs],
  title: 'UI Base/GeneralComponents'
};
const tabSizes = {
  small: 'small',
  large: 'large'
};
const TABS = ['Login', 'Signup'];
export const TabBar = () => {
  const knobProps = {
    tabs: array('Tabs', TABS),
    activeTab: 0,
    size: select('Size', tabSizes, tabSizes.small)
  };
  return <XTabBar {...knobProps} />;
};
