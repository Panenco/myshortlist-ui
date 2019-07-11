import React from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';

import cx from 'classnames';
import { ButtonIcon } from '../button';
import { Icon } from '../icon';
import s from './styles.scss';

class ImageDrop extends React.Component {
  static propTypes = {
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

  static defaultProps = {
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

  componentDidMount() {}

  onDelete = deleteF => {
    const deleteFile = this.props.value.filter(file => file !== deleteF);
    this.props.setFieldValue(this.props.name, deleteFile);
  };

  dropHandler = (acceptedF, rejectedF) => {
    if (rejectedF.length) {
      this.props.setFieldError(this.props.name, 'Image size is too big!');
    } else {
      this.props.onChange(acceptedF);
    }
  };

  renderDropzoneContent = () => {
    const { value } = this.props;

    if (value.length) {
      return <img className={s.imgDropAvatar} src={URL.createObjectURL(value[0])} alt="avatar" />;
    }
    return (
      <img
        className={s.imgDropAvatar}
        src="http://www.colonialkc.org/wp-content/uploads/2015/07/placeholder_square.jpg"
        alt="avatar"
      />
    );
  };

  render() {
    const { maxSize, value, error, onChange, ...props } = this.props;
    return (
      <div className={s.img}>
        <button type="button" className={cx(s.imgDrop, error && s.imgDropError)}>
          <Dropzone
            onDrop={this.dropHandler}
            // value={this.props.value}
            accept={this.props.accept}
            maxSize={maxSize}
            multiple
            {...props}
          >
            {this.renderDropzoneContent()}
          </Dropzone>
        </button>
        {Boolean(value.length) && (
          <ButtonIcon className={s.imgDropDeleteBtn} icon={Icon.icons.add} onClick={() => this.onDelete(value[0])} />
        )}
      </div>
    );
  }
}

export { ImageDrop };
