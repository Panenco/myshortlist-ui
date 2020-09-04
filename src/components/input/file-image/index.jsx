import React from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import { ButtonIcon } from 'components/button-icon';
import { Icon } from 'components/icon';
import { Modal } from 'components/modal';
import { PrimaryButton, SecondaryButton } from 'components/button';
import cx from 'classnames';
import ReactAvatarEditor from 'react-avatar-editor';
import s from './styles.scss';

class ImageDrop extends React.Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      allowZoomOut: false,
      position: { x: 0.5, y: 0.5 },
      scale: 1,
      rotate: 0,
      borderRadius: 50,
      preview: null,
      width: 200,
      height: 200,
    };
  }

  componentDidMount() {}

  handleModal = value => () => {
    this.setState(prevState => ({ modal: value }));
  };

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
      <div onClick={this.handleModal(true)}>
        {value ? (
          <img
            className={s.imgDropAvatar}
            src={value[0] instanceof File ? URL.createObjectURL(value[0]) : value.url}
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
      </div>
    );
  };

  // handleNewImage = e => {
  //   alert('check');
  //   console.log('312312', e.target.files);
  //   this.dropHandler(e.target.files[0]);
  // };

  handleScale = e => {
    const scale = parseFloat(e.target.value);
    this.setState({ scale });
  };

  handlePositionChange = position => {
    this.setState({ position });
  };

  onClickSave = () => {
    if (this.editor) {
      // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
      // drawn on another canvas, or added to the DOM.
      const canvas = this.editor.getImage().toDataURL();
      this.dropHandler(canvas);

      // If you want the image resized to the canvas size (also a HTMLCanvasElement)
      const canvasScaled = this.editor.getImageScaledToCanvas();
    }
  };

  setEditorRef = editor => (this.editor = editor);

  render() {
    const { maxSize, value, error, onChange, onSave, ...props } = this.props;
    const { modal } = this.state;
    return (
      <>
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
                <button type="button" className={cx(s.imgDrop, error && s.imgDropError)}>
                  {this.renderDropzoneContent(fileProps)}
                  {modal && value && (
                    <Modal title="Update your avatar" onClose={this.handleModal(false)}>
                      {/* <img
                        className={s.modalAvatar}
                        src={value[0] instanceof File ? URL.createObjectURL(value[0]) : value.url}
                        alt="avatar"
                      /> */}
                      <ReactAvatarEditor
                        ref={this.setEditorRef}
                        scale={parseFloat(this.state.scale)}
                        width={this.state.width}
                        height={this.state.height}
                        position={this.state.position}
                        onPositionChange={this.handlePositionChange}
                        rotate={parseFloat(this.state.rotate)}
                        borderRadius={this.state.width / (100 / this.state.borderRadius)}
                        image={value[0] instanceof File ? URL.createObjectURL(value[0]) : value.url}
                      />
                      <br />
                      Zoom:
                      <input
                        name="scale"
                        type="range"
                        onChange={this.handleScale}
                        min={this.state.allowZoomOut ? '0.1' : '1'}
                        max="2"
                        step="0.01"
                        defaultValue="1"
                      />
                      <SecondaryButton.Large {...fileProps.getRootProps()}>Upload new image</SecondaryButton.Large>
                      <div>
                        <PrimaryButton.Large onClick={this.onClickSave} className={s.saveButton}>
                          Save
                        </PrimaryButton.Large>
                        <PrimaryButton.Large onClick={this.handleModal(false)}>Close</PrimaryButton.Large>
                      </div>
                    </Modal>
                  )}
                </button>
              );
            }}
          </Dropzone>
          {Boolean(value && value.length) && (
            <ButtonIcon className={s.imgDropDeleteBtn} icon={Icon.icons.add} onClick={() => this.onDelete(value[0])} />
          )}
          {/* {Boolean(value && value.length) && ( */}
          <ButtonIcon className={s.imgDropEditBtn} icon={Icon.icons.edit} onClick={this.handleModal} />
          {/* )} */}
        </div>
      </>
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
