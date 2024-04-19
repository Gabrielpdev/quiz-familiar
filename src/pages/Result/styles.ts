import { styled } from '@/stitches.config'

export const Wrapper = styled('div', {
  d: 'flex',
  align: 'center',
  justify: 'flex-start',
  direction: 'column',

  maxH: '90%',
  overflow: 'auto',

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

export const Description = styled('div', {
  d: 'flex',
  align: 'center',
  justify: 'flex-start',
  direction: 'column',

  textAlign: 'center',
  my: '20px',

  color: '$white500'
})

export const QuestWrapper = styled('div', {
  d: 'flex',
  align: 'center',
  justify: 'center',
  direction: 'column',
  w: '100%',

  textAlign: 'center',
  my: '20px',

  color: '$white500'
})

export const Question = styled('h3', {
  textAlign: 'center',
  my: '10px',
  ff: '$body',
  px: '10px',

  w: '100%'
})

export const Alternative = styled('div', {
  d: 'flex',
  align: 'center',
  justify: 'center',
  textAlign: 'center',
  py: '13px',
  br: '16px',
  ff: '$body',
  mt: '5px',

  color: '#000',
  bg: '$white500',
  // border: '1px solid',
  // borderColor: 'rgba(0, 0, 0, 0.1)',

  w: '100%',

  variants: {
    isSelected: {
      true: {
        bg: '$green500',
        borderColor: '$purple700',
        position: 'relative',

        svg: {
          position: 'absolute',
          right: '10px',
          color: '$purple600'
        }
      }
    },
    isWrong: {
      true: {
        bg: '$red500'
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

  w: '80%',

  '&:disabled': {
    opacity: 0.5
  }
})
