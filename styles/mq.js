import { css } from 'styled-components'

const breakpoints = {
  xs: '576px',
  sm: '768px',
  md: '992px',
  lg: '1200px'
}

export const mq = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}) {
      ${css(...args)}
    }
  `

  return accumulator
}, {})
