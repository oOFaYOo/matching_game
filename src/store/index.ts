import {configureStore} from '@reduxjs/toolkit'
import MatchingGameReducer from './slice'

export const store = configureStore({
    reducer: {
        MatchingGameStore: MatchingGameReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>