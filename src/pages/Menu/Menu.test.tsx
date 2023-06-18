import React from "react";
import {fireEvent, render, screen, within} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import 'regenerator-runtime/runtime';
import Menu from "./index";
import {TestSuit} from "../../test-utils";
import {initialState} from "../../store/slice";

jest.mock('./../../images/sun.png', () => '');
jest.mock('./../../images/moon.png', () => '');

it('Menu test', () => {

    const Comp = ({theme}:{theme:'dark'|'light'}) => {
        return (
            TestSuit(
                <MemoryRouter>
                    <Menu/>
                </MemoryRouter>,
                {
                    MatchingGameStore: {
                        ...initialState,
                        theme: theme,
                    }
                }
            )
        )
    }

    const {rerender} = render(<Comp theme={'light'}/>)

    fireEvent.mouseDown(screen.getByTestId("select1").childNodes[0]);
    let listbox1 = within(screen.getByRole('listbox'));
    fireEvent.click(listbox1.getByText("Animals"));

    fireEvent.mouseDown(screen.getByTestId("select2").childNodes[0]);
    let listbox2 = within(screen.getByRole('listbox'));
    fireEvent.click(listbox2.getByText("8"));

    fireEvent.click(screen.getByText('Start'));

    rerender(<Comp theme={'dark'}/>)

    fireEvent.click(screen.getByText('Start'));
})