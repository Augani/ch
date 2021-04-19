/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { Button } from './Index';

const buttonSizes = {
  small: 'small',
  medium: 'medium',
  large: 'large'
};

const buttonModes = {
  light: 'light',
  dark: 'dark'
};

export default {
  component: Button,
  decorators: [withKnobs],
  title: 'UI Base/Button'
};

export const componentButton = () => {
  const knobProps = {
    size: select('Size', buttonSizes, buttonSizes.small),
    text: text('Text', 'Login'),
    mode: select('Mode', buttonModes, buttonModes.light)
  };

  return <Button {...knobProps} />;
};
