import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 3rem;
  font-family: cursive;
`

export const Subtitle = styled.h2`
  font-size: 2rem;
  font-family: cursive;
  font-weight: 100;
  color: ${props => props.inputColor || "#000"};
`