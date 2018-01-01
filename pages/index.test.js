// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Index from './index';

const renderer = new ShallowRenderer();

it('Works!', () => {
  expect(renderer.render(<Index />)).toMatchSnapshot();
});
