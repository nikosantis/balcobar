import styled from 'styled-components'
import { FaInstagram, FaFacebookSquare, FaWhatsapp } from 'react-icons/fa'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  height: 100%;
`

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
  text-align: center;
`

export const Subtitle = styled.h2`
  color: ${props => props.theme.colors.secondary};
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 2rem;
  text-align: center;
`

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  font-weight: 400;
  text-align: center;
  color: ${props => props.theme.colors.primary};
`

export const Social = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Network = styled.div`
  padding: 10px;
  font-size: 2rem;

  a {
    text-decoration: none;
  }
`

export const Instagram = styled(FaInstagram)`
  color: ${props => props.theme.colors.primary};
`

export const Facebook = styled(FaFacebookSquare)`
  color: ${props => props.theme.colors.primary};
`

export const Whatsapp = styled(FaWhatsapp)`
  color: ${props => props.theme.colors.primary};
`
