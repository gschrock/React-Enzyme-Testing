import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Span from '../lib/span';

describe('<Span/>', function () {
  it('should say it is a span', function () {
    const wrapper = shallow(<Span/>);
    expect(wrapper.text()).to.equal('This is a span!');
  });
});