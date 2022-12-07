const preguntas = [
  {
    titulo: "¿Cual es el comando correcto para crear un proyecto de React?",
    opciones: [
      { respuesta: "npm create-react-app MyAppReact", vof: false },
      { respuesta: "npx create-react-app", vof: false },
      { respuesta: "npx create-react-app MyApp", vof: true },
      { respuesta: "npx react-create-app Myapp", vof: false },
    ],
  },
  {
    titulo: "Que es ReactJS",
    opciones: [
      { respuesta: "Es una libreria para crear interfaces de usuario usando un CDN", vof: false },
      { respuesta: "Es un Framework frontend", vof: false },
      { respuesta: "Es una libreria frontend para crear interfaces reactivas", vof: true },
      { respuesta: "Es un Framework reactivo", vof: false },
    ],
  },
  {
    titulo: "Cuales son las caracteristicas principales de React?",
    opciones: [
      { respuesta: "Componentes, Virtual DOM, Declarativo, Unidireccional, Universal", vof: true },
      { respuesta: "Liviano, Curva de aprendizaje facil, Escalable", vof: false },
      { respuesta: "Bidireccional, Reactivo, Facil de aprender", vof: false },
      { respuesta: "DOM, Reactivom, Imperativo", vof: false },
    ],
  },
  {
    titulo: "El metodo setState() es asincronico?",
    opciones: [
      { respuesta: "Si", vof: true },
      { respuesta: "No", vof: false },
      
    ],
  },
  {
    titulo: "Que funcion cumplen las Keys en React",
    opciones: [
      { respuesta: "N funcion", vof: false },
      { respuesta: "Permiten acceder a los datos", vof: false },
      { respuesta: "Permiten diferenciar entre elementos unicos del DOM virtual", vof: true },
      { respuesta: "Renderizar elementos segun el estado de la Key", vof: false },
      
    ],
  },
  {
    titulo: "Que objetivo cumple ReactDOM?",
    opciones: [
      { respuesta: "manipular el DOM", vof: false },
      { respuesta: "Decide que se muesta y que no", vof: false },
      { respuesta: "Renderizar el codigo", vof: false },
      { respuesta: "Interactuar con el navegador para transferir al DOM real los cambios que React estipule en el DOM virtual", vof: true },
      
    ],
  },
  {
    titulo: "Que funcion cumple shouldComponentUpdate()",
    opciones: [
      { respuesta: "controlaría la actualización de un componente, evitando su renderizado incluso frente a cambios en su estado o props.", vof: true },
      { respuesta: "Decide el metodo de renderizacion", vof: false },
      { respuesta: "Cambia el state segun si cambias las props", vof: false },
      { respuesta: "Controla el ciclo de vida de un componente", vof: false },
      
    ],
  },
];
export default preguntas