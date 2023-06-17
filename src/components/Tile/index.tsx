import React from "react";
import {ITile} from "../../types";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

const Tile = ({image, title, open, index, clickHandler} : ITile) => {

    const {theme} = useSelector((state: RootState) => state.MatchingGameStore);

    return (
        <div className={`${theme === 'dark' 
            ? 'border-transparent big:hover:bg-neutral-600 bg-neutral-600/70 big:hover:shadow-black big:hover:border-amber-500' 
            : 'border-neutral-300 big:hover:border-amber-500 mobile:border-neutral-500 big:hover:bg-white big:border-2'} 
        relative rounded-2xl flex justify-center hover:shadow-lg items-center hover:cursor-pointer m-1 border-4 border-dashed 
        tablet:w-32 tablet:h-32 mobile:w-44 mobile:h-44 big:w-24 big:h-24 duration-1000 ${open ? '' : 'card_open'}`}
        onClick={() => clickHandler(index, title)}
        >
            {
                open
                    ? <img src={image} className={'mobile:w-40 mobile:h-40 tablet:w-28 tablet:h-28 big:w-20 big:h-20'}
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