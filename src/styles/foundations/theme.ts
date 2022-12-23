import * as config from '.'

export const theme = {
  colors: config.colors,
  transitions: config.transitions,
  fonts: config.fonts,
  fontSizes: config.fontSizes,
  fontWeights: config.fontWeights,
  radii: config.radii,
  sizes: config.sizes,
  space: config.space,
  zIndices: config.zIndices,
  breakpoints: config.breakpoints
}

export type Theme = typeof theme
