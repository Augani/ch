/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { text, withKnobs, select, boolean } from '@storybook/addon-knobs';
import { TextField as XTextField } from './Index';

export default {
  component: XTextField,
  decorators: [withKnobs],
  title: 'UI Base/FormElements'
};

const Sizes = {
  small: 'small',
  large: 'large'
};

export const TextField = () => {
  const knobProps = {
    inputSize: select('Sizes', Sizes, Sizes.small),
    label: text('Label', 'Username'),
    placeholder: text('Placeholder', 'Your username'),
    error: boolean('Error', false),
    errorText: text('Text to show on error', 'Wrong email')
  };

  return <XTextField {...knobProps} />;
};
