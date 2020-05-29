import {
  Container,
  Title,
  Subtitle,
  Text,
  Social,
  Network,
  Instagram,
  Facebook
} from './styles'

export default function Body () {
  return (
    <Container>
      <Title>
        Balcobar
      </Title>

      <Subtitle>
        Sácale provecho del espacio en tu balcón 🙌
      </Subtitle>

      <div>
        <Text>
          Hecho a mano 🔨❤️🇨🇱
          <br />
          Fácil de instalar y anclaje 100% seguro
        </Text>

        <Text>
          Síguenos en nuestras redes sociales ✨❤️:
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
        </Social>
      </div>
    </Container>
  )
}
