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

const TileContainer = ({setWin}:{setWin: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const {theme, topic, amount} = useSelector((state: RootState) => state.MatchingGameStore);
    const cards = getCards(+amount, topic);

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
        <div className={`${cards.length < 22 
            ? 'big:w-[450px] mobile:w-[600px] tablet:w-[650px]' 
            : 'big:w-[650px] tablet:w-[850px] mobile:w-[740px]'} 
            relative flex-wrap flex justify-center items-center`}>
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