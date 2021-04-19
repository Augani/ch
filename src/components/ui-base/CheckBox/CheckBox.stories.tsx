/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { CheckBox as XCheckBox } from './Index';

export default {
  component: XCheckBox,
  decorators: [withKnobs],
  title: 'UI Base/FormElements'
};

export const CheckBox = () => {
  const knobProps = {
    checked: boolean('Checked', false)
  };

  return <XCheckBox {...knobProps} />;
};
