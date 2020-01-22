import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { ExpandedTable, Header, HeaderCell, Row, Cell, IconsCell, Icon, ExpandedRow } from 'index';

import { decorator } from '../../utils/decorator';
import s from './styles.scss';

const tableContentComponent = (
  <div className={s.tableRowExpandedContent}>
    <div className={s.tableRowExpandedContentHeading}>Web designer</div>
    <div className={s.tableRowExpandedContentColumn}>
      <span className={s.tableRowExpandedContentHeader}>Heading name</span>
      <span className={s.tableRowExpandedContentSpan}>Field value</span>
    </div>
    <div className={s.tableRowExpandedContentColumn}>
      <span className={s.tableRowExpandedContentHeader}>Heading name2</span>
      <span className={s.tableRowExpandedContentSpan}>Field value2</span>
    </div>
  </div>
);

export default decorator('Expanded Table').add('Expanded table component', () => (
  <>
    <Row>
      <ExpandedTable>
        <Header>
          <HeaderCell name="name" width="170px">
            Name
          </HeaderCell>
          <HeaderCell name="status" width="140px">
            Status
          </HeaderCell>
          <HeaderCell name="company" width="120px">
            Company
          </HeaderCell>
          <HeaderCell name="added" sort={{ name: 'web', sort: 'name', direction: 'asc' }} width="160px">
            Added
          </HeaderCell>
        </Header>
        <>
          {[
            {
              firstName: 'Joanna',
              lastName: 'Doe',
              status: 'Answered',
              company: 'Company 1',
              date: '14/Mar/2019 17:30',
              jobFunctions: [
                { id: 3, name: 'Vlad' },
                { id: 2, name: 'Vlad2' },
                { id: 1, name: 'Vlad3' },
              ],
              headers: [],
            },
            {
              firstName: 'Helen',
              lastName: 'Elien',
              status: ['Canceled'],
              company: 'Company 2',
              date: ['14/Mar/2019 17:30'],
              jobFunctions: [
                { id: 3, name: 'Vlad' },
                { id: 2, name: 'Vlad2' },
                { id: 1, name: 'Vlad3' },
              ],
            },
            {
              firstName: 'Lenny',
              lastName: 'Hover',
              status: ['Responding RFV'],
              company: 'Company 3',
              date: ['14/Mar/2019 17:30'],
            },
          ].map(row => (
            <ExpandedRow key={row.firstName} content={tableContentComponent}>
              <Cell width="170px">{`${row.firstName} ${row.lastName}`}</Cell>
              <Cell width="140px">{row.status}</Cell>
              <Cell width="120px">{row.company}</Cell>
              <Cell width="160px">{row.date}</Cell>
              <IconsCell>
                <Icon icon={Icon.icons.arrow}></Icon>
                <Icon icon={Icon.icons.web}></Icon>
              </IconsCell>
            </ExpandedRow>
          ))}
        </>
      </ExpandedTable>
    </Row>
  </>
));
