import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../store";
import ThemeSwitcher from "./index";

jest.mock('./../../images/sun.png', ()=>'');
jest.mock('./../../images/moon.png', ()=>'');


it('ThemeSwitcher test', () => {

    const resizeWindow = (x:number, y:number) => {
        window.innerWidth = x;
        window.innerHeight = y;
        window.dispatchEvent(new Event('resize'));
    }

    resizeWindow(500, 300);

    const Comp = () => {
        return (
            <Provider store={store}>
                <ThemeSwitcher />
            </Provider>
        )
    }

    const {container} = render(<Comp/>);
    fireEvent.click( screen.getByTestId("switch").childNodes[0]);

    fireEvent.click(container.getElementsByClassName('mobile:w-48 mobile:h-48 tablet:w-36 tablet:h-36')[0]);
    // expect(container).toMatchSnapshot();
})