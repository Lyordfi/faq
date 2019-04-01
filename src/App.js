import React, { Component } from 'react';
import Kerdes from './Kerdes'
import AddKerdes from './AddKerdes';
import { BrowserRouter, Route } from "react-router-dom";
import quest from './quest'


class App extends Component {
  state = {
    kerdesek: [
      { kerdes: 'Mikor van telihold?', valaszok_szama: 2,  id: 1 },
      { kerdes: 'Milyen állat a gepárd?', valaszok_szama: 1,  id: 2 },
      { kerdes: 'Hogy érhető el a tökéletes alak?', valaszok_szama: 0,  id: 3 }
     
    ],
    valaszok: [
      {szoveg: 'Minden honapban valamikor.', kerdes_id:1, id:1},
      {szoveg: 'Nem tudom nem vagyok vérfarkas',kerdes_id:1, id:2},
      {szoveg: 'Kondi, étkezés és rengeteg pihenés', kerdes_id:3 ,id:1}

    ]
  }
  addKerdes = (uj_kerdes) => {
    uj_kerdes.id = Math.random();
    let kerdesek = [...this.state.kerdesek, uj_kerdes]
    this.setState({
      kerdesek: kerdesek
    })
  }

  deleteKerdes = (id) =>{
    let kerdesek = this.state.kerdesek.filter(kerdes =>{
      return kerdes.id !== id 
    });
    this.setState({
      kerdesek: kerdesek
    })
  }

  render() {
    return (
      <BrowserRouter>
      <div className="App container">
        <h1 className="center blue-text">Gyakori Kérdések</h1>
        <Kerdes deleteKerdes={this.deleteKerdes} kerdes={this.state.kerdesek}/>
        <AddKerdes addKerdes={this.addKerdes} />
        <Route path='/:kerdes_id' component={quest} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;