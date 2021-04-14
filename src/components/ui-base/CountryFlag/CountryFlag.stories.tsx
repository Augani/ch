/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { CountryFlag } from './CountryFlag';

export default {
  component: CountryFlag,
  decorators: [withKnobs],
  title: 'UI Base/CountryFlag'
};

export const SquareFLag = () => {
  const knobProps = {
    name: text('Label', 'value'),
    shape: 'square'
  };

  return <CountryFlag {...knobProps} />;
};

export const CircleFLag = () => {
  const knobProps = {
    name: 'ind',
    shape: 'circle'
  };

  return <CountryFlag {...knobProps} />;
};
