import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import 'regenerator-runtime/runtime';
import {Provider} from "react-redux";
import {store} from "../../store";
import Game from "./index";
import {TestSuit} from "../../test-utils";
import {initialState} from "../../store/slice";

jest.mock('./../../images/sun.png', () => '');
jest.mock('./../../images/moon.png', () => '');
jest.mock('./../../images/firework1.png', () => '');

jest.mock("./../../images/animals/alpaca.png", () => '');
jest.mock("./../../images/animals/antelope.png", () => '');
jest.mock("./../../images/animals/cow.png", () => '');
jest.mock("./../../images/animals/crocodile.png", () => '');
jest.mock("./../../images/animals/elephant.png", () => '');
jest.mock("./../../images/animals/flamingo.png", () => '');
jest.mock("./../../images/animals/fox.png", () => '');
jest.mock("./../../images/animals/giraffe.png", () => '');
jest.mock("./../../images/animals/hedgehog.png", () => '');
jest.mock("./../../images/animals/panda.png", () => '');
jest.mock("./../../images/animals/pig.png", () => '');
jest.mock("./../../images/animals/rabbit.png", () => '');
jest.mock("./../../images/animals/raccoon.png", () => '');
jest.mock("./../../images/animals/reindeer.png", () => '');
jest.mock("./../../images/animals/rhinoceros.png", () => '');
jest.mock("./../../images/animals/sheep.png", () => '');
jest.mock("./../../images/animals/tiger.png", () => '');
jest.mock("./../../images/animals/zebra.png", () => '');

jest.mock("./../../images/food/breakfast.png", () => '');
jest.mock("./../../images/food/burger.png", () => '');
jest.mock("./../../images/food/cake.png", () => '');
jest.mock("./../../images/food/chicken.png", () => '');
jest.mock("./../../images/food/donut.png", () => '');
jest.mock("./../../images/food/frenchfries.png", () => '');
jest.mock("./../../images/food/hotdog.png", () => '');
jest.mock("./../../images/food/icecream.png", () => '');
jest.mock("./../../images/food/japanesefood.png", () => '');
jest.mock("./../../images/food/kebab.png", () => '');
jest.mock("./../../images/food/noodles.png", () => '');
jest.mock("./../../images/food/onigiri.png", () => '');
jest.mock("./../../images/food/pancake.png", () => '');
jest.mock("./../../images/food/pizza.png", () => '');
jest.mock("./../../images/food/sandwich.png", () => '');
jest.mock("./../../images/food/spaghetti.png", () => '');
jest.mock("./../../images/food/sushi.png", () => '');
jest.mock("./../../images/food/taco.png", () => '');

jest.mock("./../../images/fruits_vegetables/apple.png", () => '');
jest.mock("./../../images/fruits_vegetables/avocado.png", () => '');
jest.mock("./../../images/fruits_vegetables/banana.png", () => '');
jest.mock("./../../images/fruits_vegetables/broccoli.png", () => '');
jest.mock("./../../images/fruits_vegetables/carrot.png", () => '');
jest.mock("./../../images/fruits_vegetables/cherry.png", () => '');
jest.mock("./../../images/fruits_vegetables/corn.png", () => '');
jest.mock("./../../images/fruits_vegetables/eggplant.png", () => '');
jest.mock("./../../images/fruits_vegetables/grapes.png", () => '');
jest.mock("./../../images/fruits_vegetables/orange.png", () => '');
jest.mock("./../../images/fruits_vegetables/papaya.png", () => '');
jest.mock("./../../images/fruits_vegetables/peach.png", () => '');
jest.mock("./../../images/fruits_vegetables/pineapple.png", () => '');
jest.mock("./../../images/fruits_vegetables/pumpkin.png", () => '');
jest.mock("./../../images/fruits_vegetables/radish.png", () => '');
jest.mock("./../../images/fruits_vegetables/strawberry.png", () => '');
jest.mock("./../../images/fruits_vegetables/tomato.png", () => '');
jest.mock("./../../images/fruits_vegetables/watermelon.png", () => '');

it('Game test', () => {

    const Comp = ({theme}:{theme:'dark'|'light'}) => {
        return (
            TestSuit(
                <MemoryRouter>
                    <Game/>
                </MemoryRouter>,
                {
                    MatchingGameStore: {
                        ...initialState,
                        theme: theme
                    }
                }
            )
        )
    }

    render(<Comp theme={'light'}/>);

    fireEvent.click(screen.getByText('Back to menu'));

    render(<Comp theme={'dark'}/>);
})