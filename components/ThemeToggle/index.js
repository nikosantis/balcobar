import { useState } from 'react'
import { useTheme } from '../../contexts/theme-context'
import {
  Container,
  Switch,
  Input,
  Toggle,
  Dot,
  Sun,
  Moon
} from './styles'

export default function ThemeToggle () {
  const { toggleTheme } = useTheme()
  const [isChecked, setIsChecked] = useState(false)
  function changeColor () {
    toggleTheme()
    setIsChecked(isChecked => !isChecked)
  }

  return (
    <Container>
      <Sun />
      <Switch>
        <Input type='checkbox' checked={isChecked} onChange={changeColor} />
        <Toggle onClick={changeColor} checked={isChecked}>
          <Dot checked={isChecked} />
        </Toggle>
      </Switch>
      <Moon />
    </Container>
  )
}
