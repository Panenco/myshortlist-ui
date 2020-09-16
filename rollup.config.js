import path from 'path';
import fs from 'fs';
import mkdirp from 'mkdirp';

import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
// import alias from 'rollup-plugin-alias';
import replace from 'rollup-plugin-replace';
import json from 'rollup-plugin-json';

// import sass from 'node-sass';
import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';
import svgSprite from 'rollup-plugin-svg-spritesheet';

import importOnce from 'node-sass-import-once';
import packageJson from './package.json';

const paths = require('./config/paths');

const external = Object.keys(packageJson.peerDependencies);

function writeFile(filePath, contents) {
  mkdirp(path.dirname(filePath), err => {
    if (err) return false;

    fs.writeFile(filePath, contents, () => {
      console.log(`${filePath} successfuly created!`);
    });
    return true;
  });
}

export default {
  input: paths.entryPoint,
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs({
      namedExports: {
        'react-is': ['ForwardRef', 'isValidElementType', 'isContextConsumer', 'isFragment', 'Memo'],
        'node_modules/react-is/index.js': ['isValidElementType', 'isContextConsumer'],
      },
    }),
    resolve({
      extensions: ['.js', '.jsx', '.json'],
      preferBuiltins: false,
      customResolveOptions: {
        moduleDirectory: ['node_modules', paths.src],
      },
    }),
    json(),
    postcss({
      use: [
        [
          'sass',
          {
            includePaths: [paths.scss],
            importer: importOnce,
          },
        ],
      ],
      plugins: [autoprefixer],
      modules: true,
      sourceMap: true,
      // minimize: true,
      extract: path.join(paths.outputPath, 'styles.css'),
      extensions: ['.css', '.scss'],
    }),
    svgSprite({
      output: code => {
        // console.log(code);
        // Do something with the generated code
        // eg. write to "spritesheet.svg"
        // fs.writeFile(path.join(paths.outputPath, 'spritesheet.svg'), code);
        writeFile(path.join(paths.outputPath, 'spritesheet.svg'), code);
      },
    }),
  ],
  external,
  globals: { 'styled-components': 'styled' },
};
