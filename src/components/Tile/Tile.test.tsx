import React from "react";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../store";
import Tile from "./index";

it('Tile test', () => {

    const Comp = () => {
        return (
            <Provider store={store}>
                <Tile title={''} index={0} open={true} image={''} clickHandler={()=>{}} />
            </Provider>
        )
    }

    render(<Comp/>)
})