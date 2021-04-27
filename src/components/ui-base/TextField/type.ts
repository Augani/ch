import React from 'react';

export interface ITextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize: string;
  label: string;
  error?: boolean;
  errorText?: string;
}

export interface ISelectOptions {
  value: any;
  label: string;
  props?: any;
  icon?: string;
}

export interface ISelectFieldProps
  extends React.InputHTMLAttributes<HTMLDivElement> {
  options: ISelectOptions[];
  label?: string;
  defaultSelect?: ISelectOptions;
  iconLeft?: boolean;
  iconsRight?: boolean;
  onValueChanged(value: ISelectOptions): any;
}

export interface ISelectListProps {
  active: boolean;
}
