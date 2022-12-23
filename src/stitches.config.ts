import { createStitches, PropertyValue, keyframes } from '@stitches/react'
import { theme } from './styles/foundations'

const { config, styled, getCssText, globalCss } = createStitches({
  theme,
  media: {
    lg: '(max-width: 1336px)',
    md: '(max-width: 1024px)',
    sm: '(max-width: 768px)'
  },
  utils: {
    m: (value: PropertyValue<'margin'>) => ({
      margin: value
    }),
    mt: (value: PropertyValue<'margin'>) => ({
      marginTop: value
    }),
    mr: (value: PropertyValue<'margin'>) => ({
      marginRight: value
    }),
    mb: (value: PropertyValue<'margin'>) => ({
      marginBottom: value
    }),
    ml: (value: PropertyValue<'margin'>) => ({
      marginLeft: value
    }),
    mx: (value: PropertyValue<'margin'>) => ({
      marginLeft: value,
      marginRight: value
    }),
    my: (value: PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value
    }),
    pt: (value: PropertyValue<'padding'>) => ({
      paddingTop: value
    }),
    pr: (value: PropertyValue<'padding'>) => ({
      paddingRight: value
    }),
    pb: (value: PropertyValue<'padding'>) => ({
      paddingBottom: value
    }),
    pl: (value: PropertyValue<'padding'>) => ({
      paddingLeft: value
    }),
    px: (value: PropertyValue<'padding'>) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: (value: PropertyValue<'padding'>) => ({
      paddingTop: value,
      paddingBottom: value
    }),
    bg: (value: PropertyValue<'background'>) => ({
      background: value
    }),
    bgImage: (value: PropertyValue<'backgroundImage'>) => ({
      backgroundImage: value
    }),
    bgSize: (value: PropertyValue<'backgroundSize'>) => ({
      backgroundSize: value
    }),
    bgPos: (value: PropertyValue<'backgroundPosition'>) => ({
      backgroundPosition: value
    }),
    bgRepeat: (value: PropertyValue<'backgroundRepeat'>) => ({
      backgroundRepeat: value
    }),
    size: (value: PropertyValue<'width'> | PropertyValue<'height'>) => ({
      width: value,
      height: value
    }),
    br: (value: PropertyValue<'borderRadius'>) => ({
      borderRadius: value
    }),
    bs: (value: PropertyValue<'boxShadow'>) => ({
      boxShadow: value
    }),
    direction: (value: PropertyValue<'flexDirection'>) => ({
      flexDirection: value
    }),
    justify: (value: PropertyValue<'justifyContent'>) => ({
      justifyContent: value
    }),
    align: (value: PropertyValue<'alignItems'>) => ({
      alignItems: value
    }),
    h: (value: PropertyValue<'height'>) => ({
      height: value
    }),
    maxH: (value: PropertyValue<'maxHeight'>) => ({
      maxHeight: value
    }),
    minH: (value: PropertyValue<'minHeight'>) => ({
      minHeight: value
    }),
    w: (value: PropertyValue<'width'>) => ({
      width: value
    }),
    maxW: (value: PropertyValue<'maxWidth'>) => ({
      maxWidth: value
    }),
    minW: (value: PropertyValue<'minWidth'>) => ({
      minWidth: value
    }),
    d: (value: PropertyValue<'display'>) => ({
      display: value
    }),
    columns: (value: PropertyValue<'gridTemplateColumns'>) => ({
      gridTemplateColumns: value
    }),
    rows: (value: PropertyValue<'gridTemplateRows'>) => ({
      gridTemplateRows: value
    }),
    fs: (value: PropertyValue<'fontSize'>) => ({
      fontSize: value
    }),
    ff: (value: PropertyValue<'fontFamily'>) => ({
      fontFamily: value
    }),
    fw: (value: PropertyValue<'fontWeight'>) => ({
      fontWeight: value
    })
  }
})

export { config, styled, getCssText, globalCss, keyframes }
