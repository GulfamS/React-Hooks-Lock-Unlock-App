import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom, #0b0c1e, #3c2940);
  height: 100vh;
`
export const Image = styled.img`
  width: 100px;
`
export const Description = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 24px;
  text-align: center;
`
export const Button = styled.button`
  background-color: #06b6d4;
  padding: 10px;
  border: none;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
  color: #ffffff;
  font-weight: 500;
  font-size: 12px;
  margin-top: 70px;
`
