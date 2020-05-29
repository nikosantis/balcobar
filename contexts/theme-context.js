import { createContext, useContext, useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import lightTheme from '../styles/themes/light'
import darkTheme from '../styles/themes/dark'

const ThemeContext = createContext()

function useDarkMode () {
  const [theme, setTheme] = useState('light')

  function toggleTheme () {
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    localTheme && setTheme(localTheme)
  }, [])

  return {
    theme,
    toggleTheme
  }
}

function ThemesProvider ({ children }) {
  const { theme, toggleTheme } = useDarkMode()
  const value = {
    theme,
    toggleTheme
  }
  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

function useTheme () {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemesProvider')
  }
  return context
}

export { ThemesProvider, useTheme }

ThemesProvider.propTypes = {
  children: PropTypes.array
}
