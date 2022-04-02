import Layout from '../components/layout'
import React, { useState, useEffect, useRef} from 'react'


//https://webomnizz.com/change-parent-component-state-from-child-using-hooks-in-react/
function Colorizer(props){

  function clickButton() {
    const colors = ["yellow", "red", "blue"];
    const random = Math.floor(Math.random() * colors.length);
    // Here, we invoke the callback with the new color for the parent
    props.onChange(colors[random]);
  }

  return(
    <button onClick = {clickButton}>Colora casella {props.text}</button>
  )
}


//NB: i componenti sono immutabili, se ci sono modifiche, vengono "sotituiti".. ecco perché va bene dichiararli con "const"
export default function ExampleBlank() {

  const [contatore, setContatore] = useState(0);
  const [burla, setBurla] = useState(false);
  // https://felixgerschau.com/useref-react-hooks/
  // non fa re-renderizzare tutto (non fa attivare useEffect)
  // Per tal motivo, posso aggiornarla anche in useEffect (senza creare un loop infinito x via di UseEffect)
  const countSommaIncrementale = useRef(0);
  const [color, setColor] = useState("white");
  //const coloref = useRef("white"); Solo x far vedere che non fa mutare

  useEffect(() => {
    console.log("Componente montato")
  } , []); // componente montato

  useEffect(() => {
    console.log("Componente re-renderizzato!");
    countSommaIncrementale.current += contatore;
  }); //Si attiva ad ogni re-render del componente (ossia appena cambia graficamente qualcosa)


  useEffect(() => {
    document.title = 'Hai cliccato '+contatore+'  volte';
  }, [burla]); //Si attiva solo al cambiamento di stato della burla


  function incrementaCounter() {
    setContatore(contatore + 1)
  }

  function attivaBurla() {
    if(burla) setBurla(false);
    else setBurla(true);
  }

  function setComeTitolo() {
    // non si avvia useEffect come dovrebbe perchè uso useRef
    document.title = 'Somma =  '+ countSommaIncrementale.current;
  }


  function changeColor(newColor) {
    console.log("Nuovo colore:", newColor)
    setColor(newColor)
    //coloref.current = newColor // Questo non farebbe mutare colore xché useRef non fa ri-renderizzare!
  }


  return (
    <Layout>
      <div>
        <button onClick = {incrementaCounter} >Press</button>
        <h1>Il contatore: {contatore}</h1>
        <p>Somma numeri fin ora: {countSommaIncrementale.current}</p>
        <button onClick = {attivaBurla} >{burla? "Muovi":"Sveglia"} Burla</button>
      </div>

      <br/><br/>

      {/* Poiché a value passo un useRef, non viene re-renderizzato tutto */}
      <input
        value={countSommaIncrementale.current}
        style={{ backgroundColor: color}}
      />
      <button onClick = {setComeTitolo} >Print on title</button>

      <br/><br/>

      <Colorizer text= {countSommaIncrementale.current}  onChange={changeColor}/>

      <br/><br/><hr/><br/><br/>
      <h1>Example timer sincro vs asincro</h1>

    </Layout>
  )
}
