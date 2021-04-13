/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { CheckBox } from './CheckBox';

export default {
  component: CheckBox,
  decorators: [withKnobs],
  title: 'UI Base/CheckBox'
};
