import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
  padding: 1rem 0;
`

export const Copyright = styled.p`
  text-align: center;
  font-size: 14px;
  color: ${props => props.theme.colors.footer};
  font-weight: 300;
  margin-bottom: 10px;
  margin-top: 0px;

  b {
    color: ${props => props.theme.colors.balcoBar};
    font-weight: 500;
  }
`

export const Dev = styled.p`
  text-align: center;
  font-size: 14px;
  color: ${props => props.theme.colors.footer};
  font-weight: 300;
  margin: 0;

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.balcoBar};
  }
`
