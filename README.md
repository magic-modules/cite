## @magic-modules/cite

This is the [@magic-modules](https://github.com/magic-modules) Cite component.

It wraps [@magic-modules/quote](https://github.com/magic-modules/quote) around the quote
and wraps the Author in a minimally styled paragraph.

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

#### install:
```bash
npm install --save-exact @magic-modules/cite
```

#### usage:

##### Markdown:

```markdown
<Cite author="Awesome Person" quote="Insightful Cite String"></Cite>
```

##### Javascript:

```javascript
Cite({ quote: 'Insightful Cite String', author: 'Awesome Person' })
```

#### changelog

##### 0.0.1
first release.

##### 0.0.2 - unreleased
...

[npm-image]: https://img.shields.io/npm/v/@magic-modules/cite.svg
[npm-url]: https://www.npmjs.com/package/@magic-modules/cite
[travis-image]: https://img.shields.io/travis/com/magic-modules/cite/master
[travis-url]: https://travis-ci.com/magic-modules/cite
[appveyor-image]: https://img.shields.io/appveyor/ci/magicmodules/cite/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magicmodules/cite/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic-modules/cite/badge.svg
[coveralls-url]: https://coveralls.io/github/magic-modules/cite
[greenkeeper-image]: https://badges.greenkeeper.io/magic-modules/cite.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic-modules/cite.svg
[snyk-image]: https://snyk.io/test/github/magic-modules/cite/badge.svg
[snyk-url]: https://snyk.io/test/github/magic-modules/cite
