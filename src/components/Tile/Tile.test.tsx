import React from "react";
import {fireEvent, render} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../store";
import Tile from "./index";
import {TestSuit} from "../../test-utils";
import {initialState} from "../../store/slice";

it('Tile test', () => {

    const Comp = ({theme}: { theme: 'dark' | 'light' }) => {
        return (
            TestSuit(
                <Tile title={''} index={0} open={true} image={''} clickHandler={() => {
                }}/>,
                {
                    MatchingGameStore: {
                        ...initialState,
                        theme: theme
                    }
                }
            )
        )
    }

    const {container, rerender} = render(<Comp theme={'light'}/>);
    // expect(container).toMatchSnapshot();
    fireEvent.click(container.getElementsByClassName('border-neutral-300 big:hover:border-amber-500 mobile:border-neutral-500 big:hover:bg-white \n' +
        '        relative rounded-2xl flex justify-center items-center hover:cursor-pointer m-1 hover:shadow-lg border-4 big:border-2  \n' +
        '        tablet:w-32 tablet:h-32 mobile:w-44 mobile:h-44 big:w-24 big:h-24 border-dashed duration-1000')[0]);

    rerender(<Comp theme={'dark'}/>);

})