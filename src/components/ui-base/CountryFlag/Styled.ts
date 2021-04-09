import styled from 'styled-components';
import { ICountryFlagProps } from './ICountryFlagProps';

export const FlagImage = styled.i<ICountryFlagProps>`
  background-color: url(${props => props.theme.socialMediaColor.youtube});
`;
