import styled from 'styled-components'

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 40vh;
  font-size: 2rem;
  margin-bottom: 3rem;
`

export const Input = styled.input`
  @media (min-width: 640px) {
    border-color: #cccccc;
    font-size: 50px;
    padding: 30px;
    text-align: center;
    border-style: solid;
    box-shadow: 1px 0px 5px 0px rgba(42, 42, 42, 0.75);
    font-weight: normal;
    font-style: italic;
    border-width: 0px;
    border-radius: 11px;
    text-shadow: 1px 0px 0px rgba(42, 42, 42, 0);
    min-width: 90vw;
    &:focus {
      outline: none;
    }
  }

  border-color: #cccccc;
  font-size: 1.5rem;
  padding: 1rem;
  text-align: center;
  border-style: solid;
  box-shadow: 1px 0px 5px 0px rgba(42, 42, 42, 0.75);
  font-weight: normal;
  font-style: italic;
  border-width: 0px;
  border-radius: 11px;
  text-shadow: 1px 0px 0px rgba(42, 42, 42, 0);
  min-width: 90vw;
  &:focus {
    outline: none;
  }
`
export const Section = styled.div`
  margin-bottom: 1rem;
`

export const Img = styled.img`
  width: 18rem;
`

export const Title = styled.h2`
  font-family: cursive
`