import styled from "styled-components";

export const NavbarWrapper=styled.nav`
width: 100%;
background-color: lightblue;
position: sticky;

`

export const Container =styled.div`
width: 1200px;
margin: auto;
justify-content: space-between;
display: flex;
align-items: center;
padding: 10px;
`

export const Logo=styled.div`
width: fit-content;
font-size: 50px;
font-weight: bold;
color: orange;

`

export const Navs=styled.ul`
list-style: none;
width: fit-content;
padding: 0;
display: flex;
li{
    padding: 5px;
    font-size: 20px;
    font-weight: bolder;
    justify-content: space-between;
    
}
`
export const Select =styled.select`
padding: 10px;
outline: none;
`
export const Card =styled.div`
width: 100%;
display: flex;
justify-content: space-around;
margin: auto;
`

export const Cards =styled.div`
width: 50%;
h1{
    width: 700px;
font-size: 40px;
font-weight: bolder;
border-bottom: 10px solid orange;
margin: 30px 20px;
}
h2{
    width: 700px;
    font-size: 25px;
    margin: 0px 20px;
}
button{
margin: 10px 20px;
width: 280px;
padding: 15px;
font-size: 20px;
font-weight: bolder;
text-align: center;
color: black;
border-radius: 10px;
background-color: orange;

}

`
export const Card1=styled.div`
width: 50%;

img{
    margin-top: 90px;
    margin-left: 90px;
    width: 500px;
    height: 500px;
}

`


