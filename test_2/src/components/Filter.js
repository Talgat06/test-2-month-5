import React from 'react';
import { useDispatch } from 'react-redux';
import { filterByType } from '../store/pokemonSlice';

const Filter = () => {
    const dispatch = useDispatch();

    const handleFilterChange = (e) => {
        dispatch(filterByType(e.target.value));
    };

    return (
        <div className="filter">
            <h1>Pokemons</h1><label htmlFor="type-filter">Type:</label>
            <select id="type-filter" onChange={handleFilterChange}>
                <option value="all">All</option>
                <option value="normal">Normal</option>
                <option value="fire">Fire</option>
                <option value="water">Water</option>
                <option value="grass">Grass</option>
                <option value="electric">Electric</option>
                <option value="ice">Ice</option>
                <option value="fighting">Fighting</option>
                <option value="poison">Poison</option>
                <option value="ground">Ground</option>
                <option value="flying">Flying</option>
                <option value="psychic">Psychic</option>
                <option value="bug">Bug</option>
                <option value="rock">Rock</option>
                <option value="ghost">Ghost</option>
                <option value="dragon">Dragon</option>
                <option value="dark">Dark</option>
                <option value="steel">Steel</option>
                <option value="fairy">Fairy</option>
            </select>
        </div>
    );
};

export default Filter;
