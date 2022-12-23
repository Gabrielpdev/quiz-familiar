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

export const Title = styled('h1', {
  d: 'flex',
  align: 'center',
  justify: 'center',

  textAlign: 'center',
  mt: '20px',

  color: '$white500'
})

export const Description = styled('h3', {
  d: 'flex',
  align: 'center',
  justify: 'center',

  textAlign: 'center',
  my: '20px',

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
  ff: '$body',
  fw: '$bold',

  bg: '$green500',
  color: '$white500',

  w: '80%',

  '&:disabled': {
    opacity: 0.5
  }
})
