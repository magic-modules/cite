import * as Cite from '../src/index.mjs'
import * as Quote from '@magic-modules/quote'

const expectedHtml = [
  'div',
  { class: 'Cite' },
  [
    ['i', { class: 'Quote' }, '“Testing Quote”'],
    ['p', { class: 'Author' }, ['- ', 'Test Author']],
  ],
]

const html = true

const before = () => {
  global.Quote = Quote.View
}

export default [
  {
    fn: () => Cite.View({ quote: 'Testing Quote', author: 'Test Author' }),
    html,
    before,
    expect: expectedHtml,
    info: 'Cite correctly wraps string and applies class string prop',
  },
  {
    fn: () => Cite.View({ quote: 'Testing Quote', author: 'Test Author' }),
    html,
    before,
    expect: expectedHtml,
    info: 'Cite correctly wraps string and applies class for prop.cite',
  },
  {
    fn: () => Cite.View({ quote: '' }),
    html,
    before,
    expect: undefined,
    info: 'Empty cite leads to no output',
  },
  {
    fn: () => Cite.View({ quote: 'Testing' }),
    expect: ['i', { class: 'Quote' }, '“Testing”'],
    before,
    html,
    info: 'no author means we just get a Quote',
  },
]
