import React from "react";

import {useSelector} from "react-redux";
import {RootState} from "../../store";

import {ITile} from "../../types";

const Tile = ({image, title, open, index, clickHandler}: ITile) => {

    const {theme} = useSelector((state: RootState) => state.MatchingGameStore);

    return (
        <div className={`${theme === 'dark'
            ? 'border-transparent big:hover:bg-neutral-600 bg-neutral-600/70 big:hover:shadow-black big:hover:border-amber-500'
            : 'border-neutral-300 big:hover:border-amber-500 mobile:border-neutral-500 big:hover:bg-white'} 
        relative rounded-2xl flex justify-center items-center hover:cursor-pointer m-1 hover:shadow-lg border-4 big:border-2  
        tablet:w-32 tablet:h-32 mobile:w-44 mobile:h-44 big:w-24 big:h-24 border-dashed duration-1000 ${open ? '' : 'card_open'}`}
             onClick={() => clickHandler(index, title)}
        >
            {
                open
                    ? <img src={image} className={'p-2'}
                           style={{
                               backfaceVisibility: 'hidden',
                           }}/>
                    : <div className={'relative w-full h-full'}
                           style={{
                               backfaceVisibility: 'hidden',
                           }}></div>
            }
        </div>
    )
};

export default Tile;