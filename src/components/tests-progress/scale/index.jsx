import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'components/grid';

const TestsProgressScale = ({ children }) => <Row>{children}</Row>;

TestsProgressScale.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TestsProgressScale };
