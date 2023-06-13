import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {IMatchingGameState} from "../types";

export const initialState: IMatchingGameState = {
    theme: localStorage.theme ? localStorage.theme : 'light',
    topic: '',
    amount: '',
};

export const MatchingGameStoreSlice = createSlice({
    name: 'MatchingGameStore',
    initialState,
    reducers: {
        setTheme : (state, action: PayloadAction<'light' | 'dark'>) => {
            state.theme = action.payload
        },
        setTopic : (state, action: PayloadAction<string>) => {
            state.topic = action.payload
        },
        setAmount : (state, action: PayloadAction<string>) => {
            state.amount = action.payload
        },
    },
});

export const {
    setTheme,
    setTopic,
    setAmount,
} = MatchingGameStoreSlice.actions;

export default MatchingGameStoreSlice.reducer;