import styled, { css } from 'styled-components'

const Wrapper = styled.h1`
  color: grey;

  ${({ color }) => color === 'primary' && css`
    color: blue;
  `}

`

export default {
  Wrapper,
}