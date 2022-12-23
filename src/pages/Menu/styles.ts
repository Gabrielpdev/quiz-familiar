import { styled } from '@/stitches.config'

export const Wrapper = styled('div', {
  d: 'flex',
  align: 'center',
  justify: 'center',
  direction: 'column',

  bg: '$background',
  w: '100%',
  h: '100vh',

  svg: {
    color: '$white500'
  }
})

export const Header = styled('div', {
  d: 'flex',
  align: 'center',
  justify: 'center',

  bg: '$purple500',

  padding: '20px',
  w: '100%'
})

export const Title = styled('p', {
  d: 'inline-flex',
  align: 'center',
  justify: 'center',
  direction: 'column',

  textAlign: 'center',
  my: '20px',
  fs: '28px',

  color: '$white500'
})

export const Confirm = styled('button', {
  d: 'flex',
  align: 'center',
  justify: 'center',
  direction: 'column',

  textAlign: 'center',
  py: '15px',
  br: '16px',
  fs: '20px',
  ff: '$body',
  fw: '$bold',

  bg: '$green500',
  color: '$white500',

  w: '80%',

  '&:disabled': {
    opacity: 0.5
  }
})
