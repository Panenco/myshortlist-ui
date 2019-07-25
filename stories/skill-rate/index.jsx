import React from 'react';
import { SkillRate } from 'index';
import { decorator } from '../../utils/decorator';

export default decorator('SkillRateBox').add('SkillRateBox Component', () => (
  <>
    <SkillRate />
  </>
));
