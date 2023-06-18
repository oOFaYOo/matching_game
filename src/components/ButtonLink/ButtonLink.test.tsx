import React from "react";
import {render} from "@testing-library/react";
import ButtonLink from "./index";
import {Provider} from "react-redux";
import {store} from "../../store";
import {MemoryRouter} from "react-router-dom";
import 'regenerator-runtime/runtime';
import {TestSuit} from "../../test-utils";
import {initialState} from "../../store/slice";

it('ButtonLink test', () => {

    const Comp = ({theme}:{theme:'dark'|'light'}) => {
        return (

            TestSuit(
                <MemoryRouter>
                    <ButtonLink title={'some'} link={''} clickCallback={() => {
                    }}/>
                </MemoryRouter>,
                {
                    MatchingGameStore: {
                        ...initialState,
                        theme:theme
                    }
                }
            ))
    }

    render(<Comp theme={'light'}/>);
    render(<Comp theme={'dark'}/>);
})