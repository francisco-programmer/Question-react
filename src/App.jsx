import { useState, useEffect } from "react";
import preguntas from "./components/preguntas";
import "./App.css";

function App() {
  const [preguntactual, setPreguntActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [finish, setFinish] = useState(false);
  const [tiempo, setTiempo] =useState(30);
  const [disable, setDisable] =useState(false)
  const resultado  = Math.floor(puntuacion / preguntas.length * 100)
 
//Fucion para cambiar ala siguiente respuesta
  function siguienteRespuesta (vof, e) {
    if(vof) setPuntuacion(puntuacion + 1);
    e.target.classList.add("bg-sky-500")
   setTimeout(() => {
     e.target.classList.remove("bg-sky-500");
     if (preguntactual === preguntas.length -1) {
       setFinish(true);
     } else {
       setPreguntActual(preguntactual + 1)
       setTiempo(30)
     }
   }, 1000);
    
  }
useEffect(() =>{
const intervalo = setInterval(() =>{
  if(tiempo > 0)setTiempo(tiempo - 1)
  if(tiempo === 0) {
    setDisable(true)
    setPreguntActual(preguntactual + 1) ; 
    setTiempo(30)
  }
  
},1000)

 return () => clearInterval(intervalo) 
}, [tiempo]);

useEffect(()=>{
  if(preguntactual === preguntas.length -1 && tiempo ===0){
    setFinish(true)
  }
}, [])

if(finish){
  return <div className="w-11/12 sm:w-1/2 bg-gray-800 text-gray-200 text-center mx-auto mt-36 rounded-xl p-6">
  <p className="text-3xl p-4">Tu Puntuación </p>
  <div className={`justify-center bg-gray-900 mx-auto w-32 h-32 rounded-[50%] ${resultado > 65 ? "border-dashed border-2 border-green-500" : "border-dashed border-2 border-red-500" } `} >
  <p className={` text-3xl pt-12 ${resultado > 65 ? "text-green-500" : "text-red-500" }  `}>{resultado}%</p>
  </div>
  {resultado > 65 ?<p className=" text-green-500 font-bold p-5 ">Felicidades! Has Ganado</p>  : <p className=" text-red-500 font-bold p-5">Has Perdido</p>}
  <button onClick={() => (window.location.href="/")} className="bg-gray-900 p-3 rounded-full">Nuevo Intento</button>
  </div>

}

  return <div className="App " >
   
   <div className="drop-shadow-2xl w-11/12 sm:w-1/2 bg-gray-800 text-gray-200 text-center mx-auto mt-36 rounded-xl p-5">
    <div className="h-12 flex justify-between place-items-center text-sky-500">Pregunta {preguntactual + 1} de {preguntas.length}<button className="bg-gray-900 rounded-full hover:bg-sky-500 p-2">{tiempo}</button></div>
    <div className="h-16 mb-5 "><p className="text-xl font-bold">{preguntas[preguntactual].titulo}</p></div>
    <div className="flex flex-col gap-3">
      {preguntas[preguntactual].opciones.map((opcion, index) =>{
        return <button key={index} className='  px-6 py-2  bg-gray-900 hover:bg-sky-500  rounded-full border-gray-900' onClick={(e) => siguienteRespuesta(opcion.vof, e )}>{opcion.respuesta}</button>
      })}
    </div>
   </div>
  </div>;
}

export default App;
