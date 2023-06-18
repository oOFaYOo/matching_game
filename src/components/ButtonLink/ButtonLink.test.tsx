import React from "react";
import {render} from "@testing-library/react";
import ButtonLink from "./index";
import {Provider} from "react-redux";
import {store} from "../../store";

it('ButtonLink test', () => {

    const Comp = () => {
        return (
            <Provider store={store}>
                <ButtonLink title={'some'} link={''} clickCallback={() => {
                }}/>
            </Provider>
        )
    }

    render(<Comp/>)
})