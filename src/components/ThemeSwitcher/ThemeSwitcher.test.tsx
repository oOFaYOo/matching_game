import React from "react";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../store";
import ThemeSwitcher from "./index";

jest.mock('./../../images/sun.png', ()=>'');
jest.mock('./../../images/moon.png', ()=>'');

it('ThemeSwitcher test', () => {

    const Comp = () => {
        return (
            <Provider store={store}>
                <ThemeSwitcher />
            </Provider>
        )
    }

    render(<Comp/>)
})