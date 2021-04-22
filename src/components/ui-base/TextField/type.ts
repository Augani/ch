export interface ITextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize: string;
  label: string;
  error?: boolean;
  errorText?: string;
}
