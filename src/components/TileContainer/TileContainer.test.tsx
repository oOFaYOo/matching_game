import React from "react";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../store";
import TileContainer from "./index";

it('TileContainer test', () => {

    const Comp = () => {
        return (
            <Provider store={store}>
                <TileContainer setWin={()=>{}} />
            </Provider>
        )
    }

    render(<Comp/>)
})