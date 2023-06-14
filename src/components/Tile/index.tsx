import React from "react";
import {ITile} from "../../types";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

const Tile = ({image} : ITile) => {

    const {theme} = useSelector((state: RootState) => state.MatchingGameStore);

    return (
        <div className={`${theme === 'dark' 
            ? 'hover:shadow-lg border-transparent hover:bg-neutral-600 bg-neutral-600/70 hover:shadow-black hover:border-amber-500' 
            : 'border-neutral-300 hover:border-amber-500 hover:shadow-lg hover:bg-white'} 
        relative rounded-2xl flex justify-center items-center hover:cursor-pointer m-1 border-2 border-dashed`}>
            <img src={image} className={'w-20 h-20 my-1 mx-4'} />
        </div>
    )
};

export default Tile;