/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Modal from './Modal';

export default {
  component: Modal,
  decorators: [withKnobs],
  title: 'UI Base/Modal'
};

export const Basic = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h1>Welcome to Coinhaven</h1>
      </Modal>
    </>
  );
};

export const DisabledBackDropClick = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        disableBackdropClick
      >
        <h1>Modal can not be close by clicking outside modal</h1>
      </Modal>
    </>
  );
};

export const FixedSize = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        width={400}
        height={200}
      >
        <h1>Modal size is fixed width 400px and height 200px</h1>
      </Modal>
    </>
  );
};
