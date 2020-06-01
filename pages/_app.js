import PropTypes from 'prop-types'
import { GlobalStyle } from '../styles/global'
import { ThemesProvider } from '../contexts/theme-context'
import 'react-multi-carousel/lib/styles.css'

export default function App ({ Component, pageProps }) {
  return (
    <ThemesProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemesProvider>
  )
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object
}
