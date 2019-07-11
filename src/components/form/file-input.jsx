import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import cx from 'classnames';

import s from './styles.scss';

const MatchAvatar = `data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAADwAAABDCAYAAADAiGZmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAePSURBVHgB7VtPbFRFGP/N23YxKtpe5FAStpHyJ8FQPMCxRTl4MUC4UAy2PSsRbsoFejDx1jb13lYC9YJtb5ggLIkX0NgaiNCWpI8EDsKhFUVhC2+c38x7u2+3u8v+mffarP6Sl3k7b3fe/Ga++eb7vvkWKAI5mkqhQSHCH+TEjhTgXVW3qoQLKYbFsbkhWIAaxBZVtKCpKaUrnj+fFf3uMmJGPuEL22ZUTSea3wBWHgfVZ0XP/ABqgDy3tRtNTpe661av6i7yjTQ8jIuPFsYQE7KE9Qy8klzSZI/8BCxOAtc/Dx67EHIKK3K62MzoJZBs5gx2IoHdkKqUolO13pL3ttfazJX5E1i+HeqFGBJH504hBuQIG3Fe1B368IqpfPIAuHLclLWAbW0+ALy1V137gOaNuWcrivTid8DNr31pkmOiZ6EfEaM84QAPbwAPLgNLalaW7oTF3YC/oWS07lCrdCfwettqgqUQHlQpTtnSGaVQoLS2SX1z5OfKOmsLHFCSFljGP5n2KJWZk/dJYlaXS7cRK7TI7+X7W5BMnkSEyCcMeU0XD68jduw6YUoHvYgQ+YSpiYm5bxA7OMMGKbW0FtU1KifsG0B5hEXP3TS4BVEpUYPGjUD5GcOnDyI5Iy+8fQgWIQor5ERHn6oe1S/+YMp0Im5QY98aMbYAFdkLuV8ZJ7OwAKewQu2FY9oC4iz/+InZL+MGB3nfV8C2XqPIHAzCEpzi1QkaAK7W1pcO1m541Itdn/oiLrrlhDJTLaAoYdFzx1WP9qvRXc4aBnPjiAw0M9k+3xOWqKQiu/3joFdWtLco95DaEkaBGFDUqE3bDxtLqhaQ0NJvxmJ7pAyO32/kW2608sJ6g4NxSestVzkx7agTTaUeaE+HZGkqbu81SoSzTUXCKzAlW3caq6yYcqOTQDL83bIi+NeD1WYpETgUfMZlFG7r1ex9ChZQkjASwmwHm/wZ5UUTkNsVS5JgyasacKBIiO1yMCkx/EzPjANZqC8o1r67Ki+2bxFHFu+hDpQmLJSbR7QdyNUFJiDBjvHijPytykyRmdOd5exvVvcbDcFS2xyfYTLfbcy2s7G4ZNSA0oThpLgn6E4XQ+Db5iyk+rDJb+f+D2pLKniW8RXZY/kH6oRT+pFM6aJlB2IBZziItBQuE392bXhRDtYTqCeIsPOSW9MuLGB9Ed7s6ws6L8F+/OS+/1C6sID1RThQihThmyOmjvs1IfErLKAJ6w17TgPfqx1xftxo52WfsEA0zsOag4bMu6fN/S0V4Lt/2dx7jUqYoJf03rncZyFnI3MP1w1C+7s4urAHlrB+CUeE/wk3OsoQFq4u1irakXMiXFhEGcKeq4u4g/IBst6XHQsrQGnCgWXzqEp/1xboNYX7YQmlCQdB+bWa4cBjCvphCSUJ66A8g3i1RDXqBdevWcOufzhgDeW1tMSwLm+NIFbkIqRpWEZ5wpnMUOyzHAQKTQdqSrUoh7KEdYQhmGUG2aI+hWD7jE0bDIge14VlvNzw4CxzL+TI//IlIsXNkWDfZwz6LCLASwmbOJJ/CkFRi2o9s136wHwPMvsREUSlX5TnOzohxFWdmUP37Z0TdtIiKMaUHA4myUp7J4XFUDFhIo80Q7T0Wes5TmWw7voXfkJL9GSJqggTOttHejPZHCxGGnkUowPpFYJEGc0Ia36Jw+LYvFUjoxiqJkxkM/bCaPWPTdreN8H78AAw8sjYFAnScguIclZ54M1zoxhSloiqg3h+PpdP1mlXs31WdbpLEUlpMpUcqxqiw3imdoANG/qU+TgI4e1GDKhepM939MERo8wSED0LWW2qD6ylOoDTZ1IihfzTPld7PXQElG0cNhezKY8x5GgR1Skt07kZaDKy36RH1A850XFVJ58KTImj84cRISqOePhkmWuRgjYMbGbAJvqNlsYh+e32wSjSlQKUzwAgyaamTpMCjD4EedTKMLBt9uVteSbKkcZzb9x2XnWe0tKn/olEJxzZpVOAi5+6q7ok8y3sGvaOOAgZfoca4CZHXUmKfBqeuAbPS4vj9bmLwte6veplJ1flN2szT+dKzyptPK16pdaZ+Mx/6sKTA/Umd/tK8AyCwZVyWDv9OQXYXeRXOrEczkq6WkkT2QxaA6VJ5bQ5xynemBY9R0wiN/v8jha/SkdfJ5S/kiwcZNWO11/o8OtltSHRrQcbomvV/l9lVr1QRsSS+tF44Xbx0k4zY0+q2Q53QO+vSho4YJ5zT0lFaO2JlFoqW/wZS4WactUPBypVgkYiX1DSuAQO5bVTgcQJasR6FJBRNlRoxUa/1I/0wExxoOsJ4WTJI7QkgDE8zZwqpehqMi3LdkCuKNL854qXUq2/mX3oiXtqhl2eAkbhIMgLW08qsT+T0/LFdxKrhNcaq/6G9DSzp3CmG+qoJZsyaRSpUozNk4Xfabizpbw8USalctsLoSEP0wxpzxhGCTHo/ytOo2FPD8Wxu0N6j2a+NV1QH419XCo9E2IW3sGgqrEJP3uRzq7li+1bWNXQhP0taVp/eJbUfnbjZwBItY4JwX+4/hcIO4m0f6djZg1laZWCdpBocj7NtP4LKPEtttJTQoYAAAAASUVORK5CYII=`;

class ImageFileInput extends React.PureComponent {
  onImageDrop = accepted => {
    this.props.setFieldValue(this.props.name, accepted);
  };

  onDrop = (accepted, rejected) => {
    if (this.props.image) {
      if (rejected.length) {
        alert('Image Rejected');
      } else {
        return this.onImageDrop(accepted);
      }
    }
    if (this.props.multiple && this.props.value) {
      return this.props.setFieldValue(this.props.name, this.props.value.concat(accepted));
    }
    return this.props.setFieldValue(this.props.name, accepted);
  };

  onDelete = file => {
    if (file.id) {
      this.props.deleteFile(file.id);
    } else {
      const newFiles = this.props.value.filter(item => item !== file);
      this.props.setFieldValue(this.props.name, newFiles);
    }
  };

  renderDropZoneContent = () => {
    const { image, fileText, inputStyle, value: files } = this.props;
    if (image && files) {
      return (
        <React.Fragment>
          <div className={s.dropzonePreviewWrapper}>
            {!files.includes('null') ? (
              <img
                className={cx(s.dropzonePreview, inputStyle)}
                src={files[0] instanceof File ? URL.createObjectURL(files[0]) : files}
                alt="Preview"
              />
            ) : (
              <img className={s.dropzoneAvatar} src={MatchAvatar} alt="Preview" />
            )}
          </div>
          <div className={cx(s.dropzoneTextWrapper, inputStyle)}>
            <p>{fileText}</p>
          </div>
        </React.Fragment>
      );
    }
    return <p>{files && files.length > 0 ? files[0].name : fileText}</p>;
  };

  render() {
    return (
      <section>
        <div className={this.props.className}>
          <Dropzone
            accept={this.props.accept}
            onDrop={this.onDrop}
            multiple={this.props.multiple}
            className={cx(
              this.props.dropzoneStyle ? this.props.dropzoneStyle : s.dropzone,
              this.props.image && s.dropzoneImage,
              this.props.inputStyle,
            )}
          >
            {this.renderDropZoneContent()}
          </Dropzone>
        </div>
      </section>
    );
  }
}

ImageFileInput.defaultProps = {
  style: null,
  inputStyle: null,
  className: null,
  multiple: false,
  fileText: 'Drop files here to upload',
  accept: null,
  image: false,
};

ImageFileInput.propTypes = {
  /* eslint-disable-next-line */
  style: PropTypes.object,
  /* eslint-disable-next-line */
  inputStyle: PropTypes.object,
  /* eslint-disable-next-line */
  dropzoneStyle: PropTypes.object,
  className: PropTypes.string,
  multiple: PropTypes.bool,
  fileText: PropTypes.string,
  accept: PropTypes.string,
  setFieldValue: PropTypes.func.isRequired,
  deleteFile: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.bool,
  value: PropTypes.arrayOf(PropTypes.instanceOf(File)).isRequired,
};

export { ImageFileInput };
