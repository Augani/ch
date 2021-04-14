import styled from 'styled-components';
import { IModalStyledProps } from './IModalProps';

const ModalStyled = styled.div<IModalStyledProps>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props =>
      props?.width ? props.theme.typography.pxToRem(props.width) : 'auto'};
    height: ${props =>
      props?.height ? props.theme.typography.pxToRem(props.height) : 'auto'};
    border-radius: 4px;
    box-shadow: 0px 10px 20px rgba(72, 72, 72, 0.15);
    padding: 2.5rem;
    position: relative;
    z-index: 1;
    background-color: ${props => props.theme.colors.white};

    .modal-close {
      position: absolute;
      top: 1.25rem;
      right: 1.25rem;
      display: block;
      width: 0.875rem;
      height: 0.875rem;
      background-image: url(/assets/icons/close.svg);
      cursor: pointer;
    }
  }

  .modal-backdrop {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(35, 36, 75, 0.7);
  }
`;

export default ModalStyled;
