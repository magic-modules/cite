import { is } from '@magic/test'
import * as Cite from '../src/index.mjs'

export default [
  {
    fn: () => Cite.View,
    expect: is.function,
    info: 'expect Cite.View to be a function',
  },
  {
    fn: () => Cite.style,
    expect: is.object,
    info: 'expect Cite.style to be an object',
  },
]
