import React from 'react';

import './styles/global.css';
import 'leaflet/dist/leaflet.css'

import Routes from './routes'

// react component
// https://reactjs.org/docs/components-and-props.html
function App() {
  return (
    <Routes />
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

