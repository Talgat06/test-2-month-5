import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPokemons = createAsyncThunk(
    'pokemon/fetchPokemons',
    async () => {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=150');
        const detailedPokemons = await Promise.all(
            response.data.results.map(async (pokemon) => {
                const details = await axios.get(pokemon.url);
                return {
                    name: pokemon.name,
                    image: details.data.sprites.front_default,
                    types: details.data.types.map(type => type.type.name),
                };
            })
        );
        return detailedPokemons;
    }
);

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        pokemons: [],
        filteredPokemons: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        filterByType(state, action) {
            if (action.payload === 'all') {
                state.filteredPokemons = state.pokemons;
            } else {
                state.filteredPokemons = state.pokemons.filter(pokemon =>
                    pokemon.types.includes(action.payload)
                );
            }
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchPokemons.pending, state => {
                state.status = 'loading';
            })
            .addCase(fetchPokemons.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.pokemons = action.payload;
                state.filteredPokemons = action.payload;
            })
            .addCase(fetchPokemons.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { filterByType } = pokemonSlice.actions;

export default pokemonSlice.reducer;
