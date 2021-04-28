import React, { FunctionComponent } from 'react';
import ActiveLink from '@utils-components/ActiveLink/ActiveLink';
import { ScrollTopStyle } from './styles';
const ScrollTop: FunctionComponent = () => {
  return (
    <ScrollTopStyle>
      <ActiveLink activeClassName='active' href='#header'>
        <div className='arrow-top'></div>
      </ActiveLink>
    </ScrollTopStyle>
  );
};

export default ScrollTop;
