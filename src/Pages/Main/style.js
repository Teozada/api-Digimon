import styled from 'styled-components'

export const MainStyle= styled.main`
  display:flex;
  flex-direction:column;
  align-items:center;
  padding:50px;

  section{
    display:flex;
    flex-wrap:wrap;
    width:100%;
    justify-content: space-around;
    margin-top:50px;
  }
div{
  background:#f6f4f5;
  margin:10px;
  padding:10px;
  display:flex;
  justify-content:center;
  align-items:center;
  box-shadow: 0 10px 12px rgba(0,0,0,0.2);
  
}
  img{
    width:200px;
    height:200px;
  }
`

export const MainInput = styled.div`

  background:#f1efef;
  display:flex;
  flex-direction:row;
  border-radius:15px;

  input{
    font-size:20px;
    background:none;
    border:none;
    outline:none;
    width:500px;
    padding:15px;
  }

  svg{
    color:white;
    background:#5ebad5;
    padding:15px;
    font-size:30px;
    border-radius:15px;
  }
`