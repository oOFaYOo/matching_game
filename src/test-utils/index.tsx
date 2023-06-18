import React from 'react'
import { Provider } from 'react-redux'
import {RootState} from '../store'
import {configureStore, PreloadedState} from "@reduxjs/toolkit";
import MatchingGameReducer from "../store/slice";

export function TestSuit (children : JSX.Element, preloadedState: PreloadedState<RootState>) {
    const store = configureStore({
        reducer: {
            MatchingGameStore: MatchingGameReducer,
        },
        preloadedState
    })
    return <Provider store={store}>{children}</Provider>
}