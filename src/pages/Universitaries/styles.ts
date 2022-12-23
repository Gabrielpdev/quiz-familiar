import { styled } from '@/stitches.config'

export const Wrapper = styled('div', {
  d: 'flex',
  align: 'center',
  justify: 'center',
  direction: 'column',

  w: '100%'
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

  color: '$white500'
})

export const CurrentQuestion = styled('h2', {
  d: 'flex',
  align: 'center',
  justify: 'center',

  color: '$white500',
  ml: 'auto'
})

export const Options = styled('div', {
  d: 'flex',
  align: 'center',
  justify: 'center',

  gap: '20px',
  mt: '10px',

  px: '10px',
  w: '100%'
})

export const ButtonHelp = styled('button', {
  d: 'flex',
  align: 'center',
  justify: 'center',

  fs: '12px',

  mt: '20px',
  py: '10px',

  bg: '$yellow400',
  br: '16px',
  color: '#000',

  w: '100%',

  '&:disabled': {
    opacity: 0.5
  }
})

export const Body = styled('div', {
  d: 'flex',
  align: 'center',
  justify: 'center',
  direction: 'column',
  gap: '20px',
  px: '30px',

  w: '100%'
})

export const Question = styled('h3', {
  textAlign: 'center',
  my: '30px',
  ff: '$body',
  px: '10px',

  w: '100%'
})

export const Alternative = styled('button', {
  d: 'flex',
  align: 'center',
  justify: 'center',
  textAlign: 'center',
  py: '13px',
  br: '16px',
  ff: '$body',

  bg: '$white500',
  border: '1px solid',
  borderColor: '$white600',

  w: '100%',

  variants: {
    isSelected: {
      true: {
        bg: '$purple100',
        borderColor: '$purple700',
        position: 'relative',

        svg: {
          position: 'absolute',
          right: '10px',
          color: '$purple600'
        }
      }
    }
  }
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

  w: '100%',

  '&:disabled': {
    opacity: 0.5
  }
})
