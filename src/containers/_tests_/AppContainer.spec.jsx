jest.mock('../../actions/handleLocationFetch', () => ({ handleLocationFetch: () => ({ type: 'fake' }) }));

import React from 'react';
import { mountWithWrappers } from '../../testHelpers';
import AppContainer from '../AppContainer';

describe('AppContainer', function () {
  it('renders without crashing', () => {
    mountWithWrappers(
      <AppContainer />
    );
  });
});
