import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import cx from 'classnames';
import { Icon } from 'components/icon';
import s from './styles.scss';

class FileInput extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    setFieldValue: PropTypes.func.isRequired,
    setFieldError: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.arrayOf(PropTypes.instanceOf(File)).isRequired,
    name: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
    accept: PropTypes.string,
    maxSize: PropTypes.number,
  };

  static defaultProps = {
    className: null,
    accept: null,
    maxSize: 5000000,
  };

  onDelete = val => {
    const deleteFile = this.props.value.filter(file => file !== val);
    this.props.setFieldValue(this.props.name, deleteFile[0]);
  };

  dropHandler = (acceptedF, rejectedF) => {
    if (rejectedF.length) {
      this.props.setFieldError(this.props.name, 'The file was rejected!!!');
    } else {
      this.props.setFieldValue(this.props.name, acceptedF);
    }
  };

  renderDropZoneContent = () => {
    const { value, error } = this.props;
    if (value && value.length) {
      return (
        <React.Fragment>
          <div className={s.fileText}>{value[0].name}</div>
        </React.Fragment>
      );
    }
    if (value && value.originalName) {
      return (
        <React.Fragment>
          <div className={s.fileText}>{value.originalName}</div>
        </React.Fragment>
      );
    }
    if (error) {
      return (
        <React.Fragment>
          <div className={s.fileText}>file</div>
        </React.Fragment>
      );
    }
    return (
      <div className={s.fileText}>
        {<Icon icon={Icon.icons.attachSmall} className={s.attachSvg} />}
        Add file
      </div>
    );
  };

  render() {
    const { value, className, error, onChange, accept, maxSize, ...props } = this.props;
    return (
      <button
        type="button"
        className={cx(
          s.file,
          value && (value.length || value.originalName) && s.fileAccepted,
          error && s.fileError,
          className,
        )}
      >
        <Dropzone
          accept={accept}
          onDrop={this.dropHandler}
          className={cx(s.fileDropzone)}
          maxSize={maxSize}
          value={value}
          multiple
          {...props}
        >
          {this.renderDropZoneContent()}
        </Dropzone>

        {Boolean(value && value.length) && (
          <button type="button" className={s.fileRightContainer} onClick={() => this.onDelete(value)}>
            <Icon icon={Icon.icons.cross} />
          </button>
        )}
        {error && (
          <button type="button" className={s.fileRightContainer}>
            <Icon icon={Icon.icons.errorSmall} />
          </button>
        )}
      </button>
    );
  }
}

export { FileInput };
