import styled, { css } from 'styled-components'

export const Input = styled.input`
  border-color: #cccccc;
  font-size: 20px;
  padding: 10px;
  text-align: left;
  border-style: solid;
  box-shadow: 1px 0px 5px 0px rgba(42, 42, 42, 0.13);
  font-weight: normal;
  font-style: italic;
  border-width: 0px;
  border-radius: 7px;
  &:focus {
    outline: none;
  }
`

export const FormGroup = styled.div`
  display: grid;
  margin: 2rem 0px;
`

export const Button = styled.button`
  background: #212020;
  border-radius: 11px;
  padding: 10px 45px;
  color: #ffffff;
  display: inline-block;
  font-family: sans-serif;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;

  &:hover {
    background: #fff;
    color: #212020;
  }

  ${props =>
    props.disabled &&
    css`
      background: #ccc;
      &:hover {
        background: #ccc;
        color: #ffffff;
      }
    `}
`
export const Alerta = styled.p`
  color: ${props => props.inputColor || '#000'};
`

export const Subtitle = styled.h2`
  font-size: 2rem;
  font-family: cursive;
  font-weight: 100;
  color: ${props => props.inputColor || '#000'};
`

export const Grid = styled.div`
  @media (min-width: 640px) {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 0.4fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 1px 1px 1px;
  }

  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(3, 1fr);
  /* gap: 1px 1px 1px; */
`

export const Card = styled.div`
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 0px 1rem;
  background-color: white;
  border-radius: 0.5rem;
  margin: 3px;
`
