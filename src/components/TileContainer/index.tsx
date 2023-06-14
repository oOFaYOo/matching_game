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

function splitArray(array:ICard[]) {
    let arr = [];
    let length = array.length;
    let divider = length >= 30 || length === 18 ? 6 : 4;
    let ost = length % divider;
    let last = 0;
    for (let i = 0; i < length-ost; i++){
        if((i+1)%divider === 0){
            arr.push(array.slice(last, i+1));
            last = i+1;
        }
    }
    if(ost){
        arr.push(array.slice(array.length-ost));
    }
    return arr;
}

const TileContainer = () => {
    const {theme, topic, amount} = useSelector((state: RootState) => state.MatchingGameStore);

    let cards = splitArray(getCards(+amount, topic));

    return (
        <div className={`${cards.length > 5 ? 'flex-row' : 'flex-col'} 
        relative grow flex justify-center items-center`}>
            {
                cards.map((item, index)=>{
                    return (<div key={index} className={`${cards.length > 5 ? 'flex-col' : 'flex-row'} 
                    relative w-full flex justify-center items-center`}>
                        {item.map((item, index)=>{
                            return <Tile image={item.image} key={index} />
                        })}
                    </div> )
                })
            }
        </div>
    )
};

export default TileContainer;