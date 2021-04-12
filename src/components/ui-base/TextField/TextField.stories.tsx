/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { TextField } from './TextField';

export default {
  component: TextField,
  decorators: [withKnobs],
  title: 'UI Base/TextField'
};

export const SmallTextField = () => {
  const knobProps = {
    inputSize: 'small',
    label: 'Username'
  };

  return <TextField {...knobProps} />;
};

export const NormalTextField = () => {
  const knobProps = {
    inputSize: 'normal',
    label: 'Username'
  };

  return <TextField {...knobProps} />;
};

export const ErrorTextField = () => {
  const knobProps = {
    inputSize: 'normal',
    label: 'Username',
    error: true
  };

  return <TextField {...knobProps} />;
};
