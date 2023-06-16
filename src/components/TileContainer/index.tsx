import React, {useEffect, useMemo, useState} from "react";
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

const TileContainer = ({setWin}:{setWin: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const {theme, topic, amount} = useSelector((state: RootState) => state.MatchingGameStore);
    const cards = getCards(+amount, topic);
    const splittedCards = splitArray(cards);

    const [pause, setPause] = useState(false);
    const [activeCard, setActiveCard] = useState<{title: string, index: number} | null>(null);
    const [cardsState, setCardsState] = useState<boolean[]>(cards.map((item, index) => {
        return false;
    }));

    const clickHandler = (index:number, title:string) => {
        if(!cardsState[index] && !pause){
            if(activeCard){
                setPause(true);
                setTimeout(()=>{
                    if(activeCard.index !== index){
                        let arr = [...cardsState];
                        arr[activeCard.index] = activeCard.title === title;
                        arr[index] = activeCard.title === title;
                        setCardsState(arr);
                        setActiveCard(null);
                    }
                    setPause(false);
                }, 1000);
            } else {
                setActiveCard({title:title, index:index});
            }
            let arr = [...cardsState];
            arr[index] = true;
            setCardsState(arr);
        }
    };

    useEffect(()=>{
        if(!cardsState.includes(false)){
            setWin(true);
        }
    }, [cardsState]);


    return (
        // <div className={`${splittedCards.length > 5 ? 'flex-row' : 'flex-col'}
        // relative grow flex justify-center items-center`}>
        //     {
        //         splittedCards.map((item, index)=>{
        //             return (<div key={index} className={`${splittedCards.length > 5 ? 'flex-col' : 'flex-row'}
        //             relative w-full flex justify-center items-center`}>
        //                 {item.map((item, index)=>{
        //                     return <Tile
        //                         image={item.image}
        //                                 title={item.title}
        //                                 clickHandler={clickHandler}
        //                                 open={cardsState[index]}
        //                                 key={index}
        //                                 index={index}/>
        //                 })}
        //             </div> )
        //         })
        //     }
        // </div>
        <div className={`relative h-[70%] w-[70%] flex-wrap flex justify-center items-center`}>
                        {cards.map((item, index)=>{
                            return <Tile
                                image={item.image}
                                title={item.title}
                                clickHandler={clickHandler}
                                open={cardsState[index]}
                                key={index}
                                index={index}/>
                        })}
        </div>
    )
};

export default TileContainer;