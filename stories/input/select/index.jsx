import React from 'react';
import { SelectInput, Row, Col, SelectInputOutsideChips, SelectSearch } from 'index';
import { decorator } from '../../../utils/decorator';

export default decorator('Input').add('SelectInput Component', () => {
  const groupedOptions = [
    {
      domain: 'IT',
      id: 'it-id',
      options: [
        {
          id: 'item-1-id',
          name: 'item-1-name',
        },
        {
          id: 'item-2-id',
          name: 'item-2-name',
        },
      ],
    },
    {
      domain: 'Business',
      id: 'Business-id',
      options: [
        {
          id: 'Business-item-1-id',
          name: 'Business-item-1-name',
        },
      ],
    },
  ];

  return (
    <>
      <Row>
        <Col s={5}>
          <SelectInput
            isSearchable
            placeholder="Placeholder"
            options={[
              { label: 'Option1', value: 'Option1' },
              { label: 'Option2', value: 'Option2' },
              { label: 'Option3', value: 'Option3' },
            ]}
          />
        </Col>
      </Row>
      <Row>
        <Col s={5}>
          <SelectInput
            placeholder="Placeholder"
            options={[
              { label: 'Option1', value: 'Option1' },
              { label: 'Option2', value: 'Option2' },
              { label: 'Option3', value: 'Option3' },
            ]}
          />
        </Col>

        <Col s={5}>
          <SelectInput
            isMulti
            placeholder="Placeholder"
            options={[
              { label: 'Option1', value: 'Option1' },
              { label: 'Option2', value: 'Option2' },
              { label: 'Option3', value: 'Option3' },
            ]}
          />
        </Col>
      </Row>

      <Row>
        <Col s={5}>
          <SelectInput
            error
            placeholder="Placeholder"
            options={[
              { label: 'Option1', value: 'Option1' },
              { label: 'Option2', value: 'Option2' },
              { label: 'Option3', value: 'Option3' },
            ]}
          />
        </Col>

        <Col s={5}>
          <SelectInput
            error
            isMulti
            placeholder="Placeholder"
            options={[
              { label: 'Option1', value: 'Option1' },
              { label: 'Option2', value: 'Option2' },
              { label: 'Option3', value: 'Option3' },
              { label: 'Option4', value: 'Option4' },
              { label: 'Option5', value: 'Option5' },
              { label: 'Option6', value: 'Option6' },
            ]}
          />
        </Col>
      </Row>

      <Row>
        <Col s={5}>
          <SelectInput
            placeholder="Placeholder"
            disabled
            options={[
              { label: 'Option1', value: 'Option1' },
              { label: 'Option2', value: 'Option2' },
              { label: 'Option3', value: 'Option3' },
            ]}
          />
        </Col>

        <Col s={5}>
          <SelectInput
            isMulti
            placeholder="Placeholder"
            disabled
            options={[
              { label: 'Option1', value: 'Option1' },
              { label: 'Option2', value: 'Option2' },
              { label: 'Option3', value: 'Option3' },
            ]}
          />
        </Col>
      </Row>
      <Row>
        <Col s={5}>
          <SelectInputOutsideChips
            placeholder="Placeholder"
            options={[
              { label: 'Option1moremore', value: 'Option1' },
              { label: 'Option2', value: 'Option2' },
              { label: 'Option3', value: 'Option3' },
            ]}
            // activeOptions={activeOptions}
            // onDelete={handleDelete}
            // onChange={handleChange}
          />
        </Col>
      </Row>
      <Row>
        <Col s={5}>
          <SelectSearch
            placeholder="SelectSearch"
            loadOptions={() => new Promise(res => res({ options: groupedOptions, hasMore: false }))}
            menuIsOpen
            isMulti
            formatGroupLabel={data => data.id}
            getOptionLabel={v => {
              return v.name;
            }}
            getOptionValue={v => v.id}
          />
        </Col>
      </Row>
    </>
  );
});
