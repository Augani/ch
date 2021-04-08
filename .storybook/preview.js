import React from 'react';
import { addDecorator, addParameters, configure } from '@storybook/react';
// import centered from '@storybook/addon-centered/react';

import { Wrapper } from './Wrapper';

const withWrapper = storyFn => <Wrapper>{storyFn()}</Wrapper>;

addDecorator(withWrapper);
// addDecorator(centered);

addParameters({
  options: {
    showRoots: true
  }
});

const loaderFn = () => {
  const allExports = [require('./welcome.stories.mdx')];
  const fromDocs = require.context('../docs', true, /\.stories\.(tsx|mdx)$/);
  const fromSrc = require.context('../src', true, /\.stories\.(tsx|mdx)$/);

  fromDocs.keys().forEach(story => allExports.push(fromDocs(story)));
  fromSrc.keys().forEach(story => allExports.push(fromSrc(story)));

  return allExports;
};

configure(loaderFn, module);
