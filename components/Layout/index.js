import Head from 'next/head'
import PropTypes from 'prop-types'
import {
  Container
} from './styles'

export default function Layout ({ title, description, children }) {
  return (
    <Container>
      <Head>
        <title>{title}</title>
        <meta
          name='description'
          content={description}
        />
        <meta
          property='og:image'
          content='/images/balcobar-logo.jpg'
        />
        <meta name='og:title' content={title} />
        <meta name='og:description' content={description} />
        <link href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap' rel='stylesheet' />
      </Head>

      {children}
    </Container>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node
}
