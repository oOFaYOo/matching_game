import React, {useMemo, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import Tile from "../Tile";
import topicsPack from "../../images";
import {ICard} from "../../types";

function getRandomNum(min:number, max:number):number {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomNums(amount:number) {
    const dict:{[key:string]:number} = {};
    for(let i = 0; i < amount/2; i++){
        let value = getRandomNum(0, 18);
        if(dict[value] === undefined){
            dict[value] = value;
        } else {
            while(dict[value] !== undefined){
                value = getRandomNum(0, 18);
            }
            dict[value] = value;
        }
    }

    return Object.values(dict).concat(Object.values(dict)).sort(() => Math.random() - 0.5);
}

function getCards(amount:number, topic:string){
    let nums = localStorage.cards ? localStorage.cards.split(',') : getRandomNums(amount);
    localStorage.cards = nums.join(',');

    let cards = [];
    for(let num of nums){
        cards.push(topicsPack[topic][num]);
    }
    return cards;
}

const TileContainer = () => {
    const {theme, topic, amount} = useSelector((state: RootState) => state.MatchingGameStore);

    return (
        <div className={'relative mt-4 w-[80%] h-[80%] flex flex-wrap justify-center items-center gap-2'}>
            {
                getCards(+amount, topic).map((item, index)=>{
                    return <Tile image={item.image} key={index} />
                })
            }
        </div>
    )
};

export default TileContainer;