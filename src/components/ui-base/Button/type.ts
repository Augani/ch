export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: string;
  text?: string;
  mode: string;
}
