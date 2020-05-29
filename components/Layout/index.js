import Head from 'next/head'
import PropTypes from 'prop-types'
import {
  Container
} from './styles'

export default function Layout ({ title, children }) {
  return (
    <Container>
      <Head>
        <title>{title}</title>
        <link href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap' rel='stylesheet' />
      </Head>

      {children}
    </Container>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}
