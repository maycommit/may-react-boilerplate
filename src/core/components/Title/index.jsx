import React from 'react'
import Styled from './styled'

const Title = ({ children, color }) => (
  <Styled.Wrapper color={color}>
    { children }
  </Styled.Wrapper>
)

export default Title