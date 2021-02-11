export const View = state => [
  h1(state.title),

  p([
    'this is the ',
    Link({ text: '@magic-modules', to: 'https://github.com/magic-modules' }),
    ' Cite component.',
  ]),

  p('It adds “” around the cite and sets font - style: italic.'),

  Cite({ quote: '@magic-modules/cite', author: 'Wizards & Witches' }),

  h2({ id: 'installation' }, 'installation'),

  Pre(`npm install --save-exact @magic-modules/cite`),

  h2({ id: 'usage' }, 'usage'),

  h3('Markdown:'),

  Pre(`<Cite quote="Insightful Citation String" author="Awesome Person"></Cite>`),

  h3('Javascript:'),
  Pre(`Cite({ quote: 'Insightful Citation String', author: 'Awesome Person' })`),

  p('renders'),

  Cite({ quote: 'Insightful Citation String', author: 'Awesome Person' }),

  h2('source'),

  p([
    'the source for this page is in the ',
    Link({
      text: 'example directory',
      to: 'https://github.com/magic-modules/cite/tree/master/example',
    }),
    ' and gets built and published to github using ',
    Link({ text: '@magic', to: 'https://github.com/magic/core' }),
  ]),
]
