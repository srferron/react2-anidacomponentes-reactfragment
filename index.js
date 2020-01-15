import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

//React Component father using hello
function SaludaPadre () {
  //Solo se puede devolver una cosa, por eso se rodean los componentes con un div o con reactfragment
  return (
    <div>
      <Saluda/>
      <h2>Padre</h2>
    </div>
  )
}

//React Component father using hello
function SaludaPadreReactFragment () {
  //Solo se puede devolver una cosa, por eso se rodean los componentes con un div o con reactfragment o en las ultimas versiones <> </> para no tener que escribir react.fragment
  return (
    <React.Fragment>
      <Saluda/>
      <h2>Padre</h2>
    </React.Fragment>
  )
}

//React Component child
function Saluda () {
  return <h2>Hola componente. Deberia estar en otro fichero</h2>
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <>
        <Saluda/>
        <SaludaPadre/>
         <SaludaPadreReactFragment/>
      </>
    );
  }
}

render(<App />, document.getElementById('root'));
