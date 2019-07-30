import React from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import cx from 'classnames';
import s from './styles.scss';
import { DragBox } from '../drag-box';

const DropArea = ({ column, tasks, defaultStatus, className }) => {
  return (
    <div className={cx(s.container, defaultStatus && s.defaultContainer, className)}>
      <p className={s.containerTitle}>{column.title}</p>

      {!tasks.length && <p className={s.containerSubTitle}>Drop card here</p>}

      <Droppable direction={defaultStatus && 'horizontal'} droppableId={column.id}>
        {(provided, snapshot) => {
          return (
            <div
              className={s.containerBoxList}
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
              {...provided.droppableProps}
            >
              {tasks.map((task, index) => (
                <DragBox key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
};

DropArea.propTypes = {
  column: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    taskIds: PropTypes.arrayOf(PropTypes.string),
    default: PropTypes.bool,
  }).isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      content: PropTypes.string,
    }),
  ).isRequired,
  defaultStatus: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

DropArea.defaultProps = {
  className: null,
};

export { DropArea };
