import React from 'react';

const PokemonCard = ({ pokemon }) => {
    return (
        <div className="pokemon-card">
            <h3>{pokemon.name}</h3>
            <img src={pokemon.image} alt={pokemon.name} />
            <p>Types: {pokemon.types.join(', ')}</p>
        </div>
    );
};

export default PokemonCard;
