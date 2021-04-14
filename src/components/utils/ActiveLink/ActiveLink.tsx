import React, { FunctionComponent, Children } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import IActiveLinkProps from './IActiveLinkProps';

const ActiveLink: FunctionComponent<IActiveLinkProps> = props => {
  const { children, activeClassName } = props;

  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || '';

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const className =
    asPath === props.href || asPath === props.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || ''
      })}
    </Link>
  );
};

export default ActiveLink;
