import styled from 'styled-components'

export const MenuStyled = styled.main`
height:100vh;
width:100vw;

display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

img {
  height: 280px;
}

a{
  font-size:25px;
  background:#5ebad5;
  text-align:center;
  vertical-align:center;
  padding:30px 50px;
  border-radius:25px;
  box-shadow:0px 10px 12px rgba(0,0,0,0.2);
  outline:none;
  border:none;
  cursor:pointer;
  margin-top:25px;
  border-radius:25px;  
  text-decoration:none;
  color:white;
}
`