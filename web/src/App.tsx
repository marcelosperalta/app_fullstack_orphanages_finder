import React from 'react';

import './styles/global.css'
import './styles/pages/landing.css'

import logoImg from './images/logo.svg'

// react component
// https://reactjs.org/docs/components-and-props.html
function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy"></img>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>
        
        <div className="location">
          <strong>Berlim</strong>
          <span>Alemanha</span>
        </div>

        <a href="" className="enter-app">
          >
        </a>
      </div>
    </div>
  );
}

export default App;

/*
// typescript interface 
// https://www.typescriptlang.org/docs/handbook/interfaces.html
interface TitleProps {
  text: string;
}

// react component
// https://reactjs.org/docs/components-and-props.html
function Title(props: TitleProps) {
  return (
    <h1>{props.text}</h1>
  )
}

// react component
// https://reactjs.org/docs/components-and-props.html
function App() {
  return (
    <div className="App">
      <Title text="Título 1" />
      <Title text="Título 2" />
      <Title text="Título 3" />
      <Title text="Título 4" />
    </div>
  );
}
*/

