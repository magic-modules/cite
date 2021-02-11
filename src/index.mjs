export const View = c => {
  // return nothing if there is no citation
  if (!c || !c.quote) {
    return
  }

  if (!c.author) {
    return Quote(c.quote)
  }

  return div({ class: 'Cite' }, [Quote(c.quote), p({ class: 'Author' }, ['- ', c.author])])
}

export const style = {
  display: 'inline-block',

  '.Author': {
    textAlign: 'right',
  },
}
