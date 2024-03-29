# ⚠️ DEPRECATED ⚠️

This package is not supported anymore. UI components were transferred to product UI.

# Shortlist core UI library



## Prerequisites

- `nvm`
- `yarn`

## Install required version of node:

```bash
nvm install 16
nvm use 16
```

## Installing dependencies

To install dependencies please run `yarn lerna bootstrap` in repository root.

## Build

`yarn build`
To watch files when development
`yarn watch`

## Build Storybook

`yarn build:storybook` will build storybook to static assets in `./storybook-dist` that can be uploaded to server

## Development

For development, please use [storybook](https://github.com/storybooks/storybook) stories.
`yarn start`

### New components adding

**Important**: Adding new component, remember: you need to use **named export** to allow `@shortlist/app` or whatever will use that package to be able to tree shake library.

OK:

```javascript
import React from 'react';
import s from './styles.scss';

const Button = props => <button type="button" className={s.button} {...props} />;

export { Button }; // Use named export
```

Wrong:

```javascript
import React from 'react';
import s from './styles.scss';

const Button = props => <button type="button" className={s.button} {...props} />;

export default Button; // Don't use default export
```

Also, don't forget to re-export new component from `src/index.jsx`.

```javascript
...
export { Button } from 'components/button';
...
```
