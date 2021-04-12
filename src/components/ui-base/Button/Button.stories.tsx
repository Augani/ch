/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Button } from './Button';

export default {
  component: Button,
  decorators: [withKnobs],
  title: 'UI Base/Button'
};

export const SmallButton = () => {
  const knobProps = {
    size: 'small',
    text: 'small',
    mode: 'dark'
  };

  return <Button {...knobProps} />;
};

export const MediumButton = () => {
  const knobProps = {
    size: 'normal',
    text: 'Medium',
    mode: 'dark'
  };

  return <Button {...knobProps} />;
};

export const LargeButton = () => {
  const knobProps = {
    size: 'large',
    text: 'Large',
    mode: 'dark'
  };

  return <Button disabled={true} {...knobProps} />;
};

export const LightLargeButton = () => {
  const knobProps = {
    size: 'large',
    text: 'Large',
    mode: 'light'
  };

  return <Button {...knobProps} />;
};
