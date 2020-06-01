import styled from 'styled-components'
import { mq } from '../../styles/mq'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 35px;
`

export const Box = styled.div`
  width: 100%;

  ${mq.sm`
    width: 100%;
  `}

  ${mq.md`
    width: 480px;
  `}

  ${mq.lg`
    width: 480px;
  `}
`

export const ImageBox = styled.div`
  width: 100%;
`

export const Image = styled.img`
  width: 100%;
`
