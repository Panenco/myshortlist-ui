import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import { Icon } from 'components/icon';
import cx from 'classnames';
import s from './styles.scss';

const DragBox = ({ task, index, className }) => {
  const isDragDisabled = task.id === 'task-1';
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          className={cx(s.box, snapshot.isDragging && s.boxDragging, className)}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          isDragDisabled={isDragDisabled}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Icon.Large className={s.boxDragDots} icon={Icon.icons.dragDots} />
          {task.content}
        </div>
      )}
    </Draggable>
  );
};

DragBox.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  className: PropTypes.string,
};

DragBox.defaultProps = {
  className: null,
};

export { DragBox };
