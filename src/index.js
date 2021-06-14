import React from 'react';
// ReactDOM empuja los componentes al DOM del html
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';

// Recive dos parametros, el componente y donde quiero empujar este componente
ReactDOM.render(<HelloWorld />,document.getElementById("app"));