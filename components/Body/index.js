import {
  Container,
  Title,
  Subtitle,
  Text,
  Social,
  Network,
  Instagram,
  Facebook,
  Whatsapp
} from './styles'

export default function Body () {
  return (
    <Container>
      <Title>
        Balcobar
      </Title>

      <Subtitle>
        Sácale provecho a tu balcón 🙌
      </Subtitle>

      <div>
        <Text>
          Hecho a mano 🔨❤️🇨🇱
          <br />
          Barra para baranda de balcón, fácil de instalar, con sistema de anclaje resistente y seguro.
        </Text>

        <Text>
          Síguenos en nuestras redes sociales ⬇️ 👀
        </Text>

        <Social>
          <Network>
            <a href='https://www.instagram.com/balco.bar/' target='_blank' rel='noreferrer' alt='Balcobar Instagram'>
              <Instagram />
            </a>
          </Network>

          <Network>
            <a href='https://www.facebook.com/BalcobarChile' target='_blank' rel='noreferrer' alt='Balcobar Facebook'>
              <Facebook />
            </a>
          </Network>

          <Network>
            <a href='https://wa.me/56956032764' target='_blank' rel='noreferrer' alt='Balcobar Whatsapp'>
              <Whatsapp />
            </a>
          </Network>
        </Social>
      </div>
    </Container>
  )
}
