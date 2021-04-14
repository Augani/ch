import { ReactElement } from 'react';
import { LinkProps } from 'next/link';

interface IActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export default IActiveLinkProps;
