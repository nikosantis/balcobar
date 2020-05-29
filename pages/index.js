import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Body from '../components/Body'

export default function Home () {
  return (
    <Layout
      title='Balcobar | Sácale provecho a tu balcón 🙌'
      description='Hecho a mano 🔨❤️🇨🇱, Fácil de instalar y anclaje 100% seguro. Sácale provecho a tu balcón 🙌 con Balcobar.'
    >
      <Header />
      <Body />
      <Footer />
    </Layout>
  )
}
