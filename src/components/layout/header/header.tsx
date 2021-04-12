import React, { FunctionComponent } from 'react';
import { IHeaderProps } from './IHeaderProps';
import { HeaderStyled } from './Styled';

export const Header: FunctionComponent<IHeaderProps> = props => {
  const { children, ...rest } = props;
  return <HeaderStyled {...rest}>{children}</HeaderStyled>;
};
