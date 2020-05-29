import styled from 'styled-components'
import { FiSun, FiMoon } from 'react-icons/fi'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80px;
  margin-bottom: 15px;
`

export const Switch = styled.div`
  display: inline-flex;
  position: relative;
  vertical-align: middle;
  white-space: nowrap;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  padding: 3px 0px;
`

export const Input = styled.input`
  height: 0px;
  opacity: 0;
  width: 0px;
  overflow: hidden;
  margin: 0px;
`

export const Toggle = styled.span`
  cursor: pointer;
  display: inline-block;
  height: 14px;
  width: 28px;
  position: relative;
  transition-delay: 0.12s;
  transition-duration: 0.2s;
  transition-property: background, border;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  border-radius: 14px;
  ${props => props.checked
    ? `
      background: ${props.theme.colors.balcoBar};
    `
    : `
      background: ${props.theme.colors.toggle};
    `
  }
`

export const Dot = styled.div`
  cursor: pointer;
  height: 12px;
  width: 12px;
  position: absolute;
  top: 50%;
  transform: translate(0px, -50%);
  transition-duration: 0.28s;
  transition-property: left;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  border-radius: 50%;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  border-image: initial;
  white-space: nowrap;
  user-select: none;
  box-sizing: border-box;

  ${props => props.checked
    ? `
      left: calc(14px);
      background: #000000;
    `
    : `
      background: #ffffff;
    `
  }
`

export const Sun = styled(FiSun)`
  color: ${props => props.theme.colors.themeIcon};
`

export const Moon = styled(FiMoon)`
  color: ${props => props.theme.colors.themeIcon};
`
