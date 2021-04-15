import React, { FunctionComponent, useEffect, useState } from 'react';
import { IModalProps } from './types';
import ModalStyles from './styles';
import { CSSTransition } from 'react-transition-group';
import { isUndefined } from 'lodash';

const Modal: FunctionComponent<IModalProps> = props => {
  const {
    width,
    height,
    children,
    isOpen = false,
    onOpen,
    onClose,
    disableBackdropClick = false
  } = props;

  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  useEffect(() => setIsModalOpen(isOpen), [isOpen]);

  useEffect(() => {
    if (isModalOpen) {
      onOpen?.();
    } else {
      onClose?.();
    }
  }, [isModalOpen]);

  return (
    <CSSTransition
      in={isModalOpen}
      classNames='transition'
      timeout={300}
      unmountOnExit
    >
      <ModalStyles
        {...(!isUndefined(width) ? { width } : {})}
        {...(!isUndefined(height) ? { height } : {})}
      >
        <div className='modal'>
          <span className='modal-close' onClick={() => setIsModalOpen(false)} />
          {children}
        </div>
        <div
          className='modal-backdrop'
          {...(!disableBackdropClick
            ? { onClick: () => setIsModalOpen(false) }
            : {})}
        />
      </ModalStyles>
    </CSSTransition>
  );
};

export default Modal;
