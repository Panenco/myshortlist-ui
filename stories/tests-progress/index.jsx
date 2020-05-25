import React from 'react';
import { TestsProgressScale, ScaleBlock } from 'index';
import { decorator } from '../../utils/decorator';

export default decorator('TestsProgressScale').add('TestsProgressScale Component', () => (
  <TestsProgressScale>
    <ScaleBlock questions={12} testsCount={5} done={12}>
      Generic Competences (10 min)
    </ScaleBlock>
    <ScaleBlock questions={8} testsCount={5} done={6}>
      Interests (8 min)
    </ScaleBlock>
    <ScaleBlock questions={8} testsCount={5} done={3}>
      Job specific competences (5 min)
    </ScaleBlock>
    <ScaleBlock questions={4} testsCount={5} done={0}>
      Career drivers (12 min)
    </ScaleBlock>
    <ScaleBlock questions={5} testsCount={5} done={0}>
      Culture (10 min)
    </ScaleBlock>
  </TestsProgressScale>
));
