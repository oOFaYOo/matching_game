import React from "react";
import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import 'regenerator-runtime/runtime';
import {Provider} from "react-redux";
import {store} from "../../store";
import Menu from "./index";

it('Menu test', () => {

    const Comp = () => {
        return (
            <MemoryRouter>
                <Provider store={store}>
                    <Menu/>
                </Provider>
            </MemoryRouter>
        )
    }

    render(<Comp/>)
})