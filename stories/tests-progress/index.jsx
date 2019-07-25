import React from 'react';
import { TestsProgressScale, ScaleBlock } from 'index';
import { decorator } from '../../utils/decorator';

export default decorator('TestsProgressScale').add('TestsProgressScale Component', () => (
  <TestsProgressScale>
    <ScaleBlock questions={12} done={20}>
      Generic Competences (10 min)
    </ScaleBlock>
    <ScaleBlock questions={8} done={8}>
      Interests (8 min)
    </ScaleBlock>
    <ScaleBlock questions={8} done={3}>
      Job specific competences (5 min)
    </ScaleBlock>
    <ScaleBlock questions={4} done={0}>
      Career drivers (12 min)
    </ScaleBlock>
    <ScaleBlock questions={5} done={0}>
      Culture (10 min)
    </ScaleBlock>
  </TestsProgressScale>
));
