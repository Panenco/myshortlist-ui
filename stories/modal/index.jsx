import React from 'react';
import { Modal } from 'index';
import { decorator } from '../../utils/decorator';

export default decorator('Modal').add('Modal Component', () => (
  <>
    <Modal>
      You have an overriding need to do things your own way, independent of other people`s control. You have an aversion
      to being tightly managed and do your best work
    </Modal>
  </>
));
