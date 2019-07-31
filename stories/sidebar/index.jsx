import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Sidebar, Item, Icon } from 'index';
import { decorator } from '../../utils/decorator';

export default decorator('Sidebar').add('Sidebar Component', () => (
  <BrowserRouter>
    <Sidebar>
      <Item to="/orientation" icon={Icon.icons.searchProfiles}>
        Orientation
      </Item>
      <Item to="/courses" icon={Icon.icons.searchProfiles}>
        Courses
      </Item>
      <Item to="/payment" icon={Icon.icons.searchProfiles}>
        Payment
      </Item>
    </Sidebar>
  </BrowserRouter>
));
