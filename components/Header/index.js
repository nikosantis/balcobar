import { useTheme } from '../../contexts/theme-context'
import LogoLight from '../../public/images/LogoLight'
import LogoDark from '../../public/images/LogoDark'
import ThemeToggle from '../ThemeToggle/index'
import {
  Container,
  ImageBox
} from './styles'

export default function Header () {
  const { theme } = useTheme()
  return (
    <Container>
      <ThemeToggle />
      <ImageBox>
        {
          theme === 'dark'
            ? <LogoDark />
            : <LogoLight />
        }
      </ImageBox>
    </Container>
  )
}
