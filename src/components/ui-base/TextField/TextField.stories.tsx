/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import {
  text,
  withKnobs,
  select,
  boolean,
  object,
  array
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { TextField as XTextField, SelectField as XSelectField } from './Index';
import { ISelectFieldProps, ISelectOptions } from './type';

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

const selectArray: ISelectOptions[] = [
  {
    value: 'BTC',
    label: 'BTC',
    icon:
      'https://res.cloudinary.com/augani/image/upload/v1619444457/Bitcoin.png'
  },
  {
    value: 'USDT',
    label: 'USDT',
    icon: 'https://res.cloudinary.com/augani/image/upload/v1619444457/USDT.png'
  },
  {
    value: 'ETH',
    label: 'ETH',
    icon:
      'https://res.cloudinary.com/augani/image/upload/v1619444457/Ethereum_Classic.png'
  }
];

export const SelectField = () => {
  const knobProps = {
    options: object('Options', selectArray),
    iconLeft: boolean('Icon left', true),
    defaultSelect: selectArray[0],
    onValueChanged: action('Value Changed')
  };

  return <XSelectField {...knobProps} />;
};
