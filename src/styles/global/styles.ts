import { globalCss } from '../../stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },

  body: {
    color: '$text',
    fontFamily: '$body',
    w: '100%',
    h: '100vh',
    overflowX: 'hidden',

    '#root': {
      minH: '100vh',
      background: '$white200'
    }
  },

  '@media (max-width: 1080px)': {
    html: {
      fontSize: '93.75%'
    }
  },

  '@media (max-width: 720px)': {
    html: {
      fontSize: '87.5%'
    }
  },

  'body, input, textarea, select': {
    fontFamily: '$body'
  },

  button: {
    cursor: 'pointer',
    border: 'none',
    boxShadow: 'none',
    fontFamily: '$heading',
    bg: 'transparent'
  },

  a: {
    color: 'inherit',
    textDecoration: 'none'
  },

  'h1, h2, h3': {
    fontFamily: '$heading'
  },

  '@font-face': {
    fontFamily: 'Vinque',
    src: 'local("/fonts/Vinque/regular/font.ttf"), url("/fonts/Vinque/regular/font.ttf")'
  }
})
