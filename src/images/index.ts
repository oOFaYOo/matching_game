import {ICard} from "../types";

import alpaca from "../images/animals/alpaca.png";
import antelope from "../images/animals/antelope.png";
import cow from "../images/animals/cow.png";
import crocodile from "../images/animals/crocodile.png";
import elephant from "../images/animals/elephant.png";
import flamingo from "../images/animals/flamingo.png";
import fox from "../images/animals/fox.png";
import giraffe from "../images/animals/giraffe.png";
import hedgehog from "../images/animals/hedgehog.png";
import panda from "../images/animals/panda.png";
import pig from "../images/animals/pig.png";
import rabbit from "../images/animals/rabbit.png";
import raccoon from "../images/animals/raccoon.png";
import reindeer from "../images/animals/reindeer.png";
import rhinoceros from "../images/animals/rhinoceros.png";
import sheep from "../images/animals/sheep.png";
import tiger from "../images/animals/tiger.png";
import zebra from "../images/animals/zebra.png";

import breakfast from "../images/food/breakfast.png";
import burger from "../images/food/burger.png";
import cake from "../images/food/cake.png";
import chicken from "../images/food/chicken.png";
import donut from "../images/food/donut.png";
import frenchfries from "../images/food/frenchfries.png";
import hotdog from "../images/food/hotdog.png";
import icecream from "../images/food/icecream.png";
import japanesefood from "../images/food/japanesefood.png";
import kebab from "../images/food/kebab.png";
import noodles from "../images/food/noodles.png";
import onigiri from "../images/food/onigiri.png";
import pancake from "../images/food/pancake.png";
import pizza from "../images/food/pizza.png";
import sandwich from "../images/food/sandwich.png";
import spaghetti from "../images/food/spaghetti.png";
import sushi from "../images/food/sushi.png";
import taco from "../images/food/taco.png";

import apple from "../images/fruits_vegetables/apple.png";
import avocado from "../images/fruits_vegetables/avocado.png";
import banana from "../images/fruits_vegetables/banana.png";
import broccoli from "../images/fruits_vegetables/broccoli.png";
import carrot from "../images/fruits_vegetables/carrot.png";
import cherry from "../images/fruits_vegetables/cherry.png";
import corn from "../images/fruits_vegetables/corn.png";
import eggplant from "../images/fruits_vegetables/eggplant.png";
import grapes from "../images/fruits_vegetables/grapes.png";
import orange from "../images/fruits_vegetables/orange.png";
import papaya from "../images/fruits_vegetables/papaya.png";
import peach from "../images/fruits_vegetables/peach.png";
import pineapple from "../images/fruits_vegetables/pineapple.png";
import pumpkin from "../images/fruits_vegetables/pumpkin.png";
import radish from "../images/fruits_vegetables/radish.png";
import strawberry from "../images/fruits_vegetables/strawberry.png";
import tomato from "../images/fruits_vegetables/tomato.png";
import watermelon from "../images/fruits_vegetables/watermelon.png";

const topicsPack:{[key:string]:ICard[]} = {
    animals: [
        {
            title: 'alpaca',
            image: alpaca,
        },
        {
            title: 'antelope',
            image: antelope,
        },
        {
            title: 'cow',
            image: cow,
        },
        {
            title: 'crocodile',
            image: crocodile,
        },
        {
            title: 'elephant',
            image: elephant,
        },
        {
            title: 'flamingo',
            image: flamingo,
        },
        {
            title: 'fox',
            image: fox,
        },
        {
            title: 'giraffe',
            image: giraffe,
        },
        {
            title: 'hedgehog',
            image: hedgehog,
        },
        {
            title: 'panda',
            image: panda,
        },
        {
            title: 'pig',
            image: pig,
        },
        {
            title: 'rabbit',
            image: rabbit,
        },
        {
            title: 'raccoon',
            image: raccoon,
        },
        {
            title: 'reindeer',
            image: reindeer,
        },
        {
            title: 'rhinoceros',
            image: rhinoceros,
        },
        {
            title: 'sheep',
            image: sheep,
        },
        {
            title: 'tiger',
            image: tiger,
        },
        {
            title: 'zebra',
            image: zebra,
        }
    ],
    food: [
        {
            title: 'breakfast',
            image: breakfast,
        },
        {
            title: 'burger',
            image: burger,
        },
        {
            title: 'cake',
            image: cake,
        },
        {
            title: 'chicken',
            image: chicken,
        },
        {
            title: 'donut',
            image: donut,
        },
        {
            title: 'frenchfries',
            image: frenchfries,
        },
        {
            title: 'hotdog',
            image: hotdog,
        },
        {
            title: 'icecream',
            image: icecream,
        },
        {
            title: 'japanesefood',
            image: japanesefood,
        },
        {
            title: 'kebab',
            image: kebab,
        },
        {
            title: 'noodles',
            image: noodles,
        },
        {
            title: 'onigiri',
            image: onigiri,
        },
        {
            title: 'pancake',
            image: pancake,
        },
        {
            title: 'pizza',
            image: pizza,
        },
        {
            title: 'sandwich',
            image: sandwich,
        },
        {
            title: 'spaghetti',
            image: spaghetti,
        },
        {
            title: 'sushi',
            image: sushi,
        },
        {
            title: 'taco',
            image: taco,
        }
    ],
    fruits_and_vegetables: [
        {
            title: 'apple',
            image: apple,
        },
        {
            title: 'avocado',
            image: avocado,
        },
        {
            title: 'banana',
            image: banana,
        },
        {
            title: 'broccoli',
            image: broccoli,
        },
        {
            title: 'carrot',
            image: carrot,
        },
        {
            title: 'cherry',
            image: cherry,
        },
        {
            title: 'corn',
            image: corn,
        },
        {
            title: 'eggplant',
            image: eggplant,
        },
        {
            title: 'grapes',
            image: grapes,
        },
        {
            title: 'orange',
            image: orange,
        },
        {
            title: 'papaya',
            image: papaya,
        },
        {
            title: 'peach',
            image: peach,
        },
        {
            title: 'pineapple',
            image: pineapple,
        },
        {
            title: 'pumpkin',
            image: pumpkin,
        },
        {
            title: 'radish',
            image: radish,
        },
        {
            title: 'strawberry',
            image: strawberry,
        },
        {
            title: 'tomato',
            image: tomato,
        },
        {
            title: 'watermelon',
            image: watermelon,
        }
    ]
}

export default topicsPack;