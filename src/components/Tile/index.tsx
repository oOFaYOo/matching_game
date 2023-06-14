import React from "react";
import {ITile} from "../../types";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

const Tile = ({image} : ITile) => {

    const {theme} = useSelector((state: RootState) => state.MatchingGameStore);

    return (
        <div className={`${theme === 'dark' 
            ? 'hover:shadow-lg hover:bg-neutral-600 bg-neutral-600/70 hover:shadow-black/80 hover:border-2 border-dashed hover:border-neutral-400' 
            : 'border-neutral-300 hover:border-neutral-400 hover:shadow-lg hover:bg-white border-2 border-dashed'} 
        relative h-28 w-28 rounded-2xl flex justify-center items-center hover:cursor-pointer `}>
            <img src={image} className={'w-20 h-20'} />
        </div>
    )
};

export default Tile;