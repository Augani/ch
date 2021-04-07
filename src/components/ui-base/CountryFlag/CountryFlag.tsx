import React, { FunctionComponent } from 'react';
import { ICountryFlagProps } from './ICountryFlagProps';
import { FlagImage } from './Styled';

export const CountryFlag: FunctionComponent<ICountryFlagProps> = props => {
  const { name, shape } = props;

  return (
    <>
      Flag of ({name}) and shape is ({shape})
      <FlagImage {...props} />
    </>
  );
};
