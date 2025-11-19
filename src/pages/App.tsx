import HomeMenuComponent from "../components/header/Menu"


export default function App(){   //Creating Component and comp always returns
  
  const username = " Ahsit Tamang ";
  
  return(
    <>
      <HomeMenuComponent/>
      <h1>Hello { username }</h1>
      <p>Lorem Ipsum</p>
    </>
  );
} 
