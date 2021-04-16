import { ReactNode } from 'react';

export interface IModalProps {
  // define a width of modal if need
  width?: number;
  // define a height of modal if need
  height?: number;
  children: ReactNode;
  // on true popup will open
  isOpen: boolean;
  // when modal will open execute this method
  onOpen?(): void;
  // when modal will close execute this method
  onClose?(): void;
  // on true if user click backdrop area modal will be prevented to be close.
  disableBackdropClick?: boolean;
}

export interface IModalStyledProps {
  width?: number;
  height?: number;
}
