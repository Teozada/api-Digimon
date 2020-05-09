import styled from 'styled-components'

export const DigimonStyle = styled.main`
width:100vw;
height:100vh;

display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

svg{
  color:#5e8ad5;
  font-size:55px;
  position:absolute;
  top:20px;
  left:20px;
}
`
export const DigimonContainer = styled.div`
display:flex;
flex-direction:row;
align-items:center;

div{
  background:#f6f4f5;
  display:flex;
  flex-direction:column;
  height:200px;
  width:350px;
  padding:35px;
  box-shadow:3px 3px 15px 8px rgba(0,0,0,0.2);
  margin:15px;
}

label{
  color:#7e7e7e;
  font-size:20px;
}

span{
  font-size:30px;
  font-weight:500px;
}

`
