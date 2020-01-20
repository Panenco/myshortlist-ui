import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { ExpandedTable, Header, HeaderCell, Row, Cell, IconsCell, Pagination, ExpandedRow } from 'index';

import { decorator } from '../../utils/decorator';

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
          <HeaderCell name="added" sort={{ sort: 'name', direction: 'asc' }} width="160px">
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
            },
            {
              firstName: 'Helen',
              lastName: 'Elien',
              status: ['Canceled'],
              company: 'Company 2',
              date: ['14/Mar/2019 17:30'],
            },
            {
              firstName: 'Lenny',
              lastName: 'Hover',
              status: ['Responding RFV'],
              company: 'Company 3',
              date: ['14/Mar/2019 17:30'],
            },
          ].map(row => (
            <ExpandedRow key={row.firstName} content={{ status: row.status, date: row.date }}>
              <Cell width="170px">
                <p>{`${row.firstName} ${row.lastName}`}</p>
              </Cell>
              <Cell width="140px">
                <p>{row.status}</p>
              </Cell>
              <Cell width="120px">
                <p>{row.company}</p>
              </Cell>
              <Cell width="160px">
                <p>{row.date}</p>
              </Cell>
              <IconsCell icons={['mail', 'error']}></IconsCell>
            </ExpandedRow>
          ))}
        </>
      </ExpandedTable>
    </Row>
  </>
));
