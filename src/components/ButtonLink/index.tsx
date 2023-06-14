import {Link} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import {IButtonLink} from "../../types";


const ButtonLink = ({title, link, clickCallback} : IButtonLink) => {

    const {theme} = useSelector((state: RootState) => state.MatchingGameStore);

    return (
        <button className={`${theme === 'dark' ? 'border-neutral-400 text-neutral-400' : 'border-neutral-900 text-neutral-900'} 
                border-2 border-dashed w-56 rounded-3xl flex items-center hover:scale-105 hover:border-amber-500`}
                onClick={clickCallback}>
            <Link className={'relative inline-block w-full py-3.5'} to={link}>
                {title}
            </Link>
        </button>
    )
};

export default ButtonLink;