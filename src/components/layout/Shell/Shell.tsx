import React, { FunctionComponent } from 'react';
import { IShellProps } from './IShellProps';
import './shell.scss';

export const Shell: FunctionComponent<IShellProps> = props => {
  const { children } = props;

  return (
    <>
      <div className={'shell'}>{children}</div>
    </>
  );
};
