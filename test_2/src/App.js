import React from 'react';
import PokemonList from './components/PokemonList';
import Filter from './components/Filter';

function App() {
  return (
      <div className="App">
        <Filter />
        <PokemonList />
      </div>
  );
}

export default App;
