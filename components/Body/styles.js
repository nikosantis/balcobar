import styled from 'styled-components'
import { FaInstagram, FaFacebookSquare, FaWhatsapp } from 'react-icons/fa'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px 15px;
  height: 100%;
`

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 10px;
  text-align: center;
`

export const Subtitle = styled.h2`
  color: ${props => props.theme.colors.secondary};
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 20px;
  text-align: center;
`

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  font-weight: 400;
  text-align: center;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 15px;
`

export const Social = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Network = styled.div`
  padding: 0 10px;
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
