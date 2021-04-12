import React, { FunctionComponent } from 'react';
import { IHeaderProps } from './IHeaderProps';
import styles from './header.module.css';

export const Header: FunctionComponent<IHeaderProps> = props => {
  const { children } = props;

  return (
    <>
      <div className={styles.header}>{children}</div>
    </>
  );
};
