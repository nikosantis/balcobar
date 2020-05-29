import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Body from '../components/Body'

export default function Home () {
  return (
    <Layout
      title='Balcobar | Sácale provecho del espacio en tu balcón 🙌'
      description='Sácale provecho del espacio en tu balcón 🙌 con Balcobar, Hecho a mano 🔨❤️🇨🇱, Fácil de instalar y anclaje 100% seguro.'
    >
      <Header />
      <Body />
      <Footer />
    </Layout>
  )
}
