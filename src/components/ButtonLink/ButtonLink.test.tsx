import React from "react";
import {render} from "@testing-library/react";
import ButtonLink from "./index";
import {Provider} from "react-redux";
import {store} from "../../store";
import {MemoryRouter} from "react-router-dom";
import 'regenerator-runtime/runtime';

it('ButtonLink test', () => {

    const Comp = () => {
        return (
            <MemoryRouter>
            <Provider store={store}>
                <ButtonLink title={'some'} link={''} clickCallback={() => {
                }}/>
            </Provider>
            </MemoryRouter>
        )
    }

    render(<Comp/>)
})