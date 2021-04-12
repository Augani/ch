import { ClassAttributes } from 'react';

export interface ITextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize: string;
  label: string;
}
