/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { TabBar } from './TabBar';

export default {
  component: TabBar,
  decorators: [withKnobs],
  title: 'UI Base/TabBar'
};
