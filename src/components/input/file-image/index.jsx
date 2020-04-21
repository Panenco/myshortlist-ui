import React from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import { ButtonIcon } from 'components/button-icon';
import { Icon } from 'components/icon';
import cx from 'classnames';
import s from './styles.scss';

class ImageDrop extends React.Component {
  componentDidMount() {}

  onDelete = deleteF => {
    const deleteFile = this.props.value.filter(file => file !== deleteF);
    this.props.setFieldValue(this.props.name, deleteFile);
  };

  dropHandler = (acceptedF, rejectedF) => {
    const { setFieldValue, name } = this.props;
    setFieldValue(name, acceptedF);
  };

  renderDropzoneContent = fileProps => {
    const { value } = this.props;
    return (
      <>
        {value ? (
          <img
            className={s.imgDropAvatar}
            src={value && value[0] instanceof File ? URL.createObjectURL(value[0]) : value}
            alt="avatar"
          />
        ) : (
          <img
            className={s.imgDropAvatar}
            src="http://www.colonialkc.org/wp-content/uploads/2015/07/placeholder_square.jpg"
            alt="avatar"
          />
        )}
        <input {...fileProps.getInputProps()} />
      </>
    );
  };

  render() {
    const { maxSize, value, error, onChange, ...props } = this.props;
    return (
      <div className={s.img}>
        <Dropzone
          onDrop={this.dropHandler}
          // value={this.props.value}
          // accept={this.props.accept}
          // maxSize={maxSize}
          multiple
          // {...props}
        >
          {fileProps => {
            return (
              <button type="button" className={cx(s.imgDrop, error && s.imgDropError)} {...fileProps.getRootProps()}>
                {this.renderDropzoneContent(fileProps)}
              </button>
            );
          }}
        </Dropzone>
        {Boolean(value && value.length) && (
          <ButtonIcon className={s.imgDropDeleteBtn} icon={Icon.icons.add} onClick={() => this.onDelete(value[0])} />
        )}
      </div>
    );
  }
}

ImageDrop.defaultProps = {
  inputStyle: null,
  maxSize: null,
  className: null,
  multiple: false,
  error: false,
  fileText: 'Drop files here to upload',
  accept: null,
  image: false,
  value: null,
};

ImageDrop.propTypes = {
  /* eslint-disable-next-line */
  inputStyle: PropTypes.object,
  maxSize: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.bool,
  multiple: PropTypes.bool,
  fileText: PropTypes.string,
  accept: PropTypes.string,
  setFieldValue: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  setFieldError: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.bool,
  value: PropTypes.arrayOf(PropTypes.instanceOf(File)),
};

export { ImageDrop };
