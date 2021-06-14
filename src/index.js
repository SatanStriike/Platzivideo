import React from 'react';
// ReactDOM empuja los componentes al DOM del html
import ReactDOM from 'react-dom';
import App from './container/App';

// Recive dos parametros, el componente y donde quiero empujar este componente
ReactDOM.render(<App />,document.getElementById("app"));