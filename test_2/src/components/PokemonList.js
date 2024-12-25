import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemons } from '../store/pokemonSlice';
import PokemonCard from './PokemonCard';

const PokemonList = () => {
    const dispatch = useDispatch();
    const { filteredPokemons, status, error } = useSelector(state => state.pokemon);

    useEffect(() => {
        dispatch(fetchPokemons());
    }, [dispatch]);

    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'failed') return <p>Error: {error}</p>;

    return (
        <div className="pokemon-list">
            {filteredPokemons.map((pokemon, index) => (
                <PokemonCard key={index} pokemon={pokemon} />
            ))}
        </div>
    );
};

export default PokemonList;
