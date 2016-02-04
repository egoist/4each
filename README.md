# 4each [![NPM version](https://img.shields.io/npm/v/4each.svg)](https://npmjs.com/package/4each) [![NPM downloads](https://img.shields.io/npm/dm/4each.svg)](https://npmjs.com/package/4each) [![Build Status](https://img.shields.io/circleci/project/egoist/4each/master.svg)](https://circleci.com/gh/egoist/4each)

> forEach but for everything

## Install

```
$ npm install --save 4each
```

## Usage

```js
const each = require('4each')

// Array
each([1, 2, 3], (val, index) => {})
// Dom NodeList
each(document.querySelectorAll('div'), (element, index) => {})
// Plain Object
each({foo: 0, bar: 1}, (value, key) => {})
```

## License

MIT © [EGOIST](https://github.com/egoist)
