import React from "react";
import {Link} from "react-router-dom";

import {useSelector} from "react-redux";
import {RootState} from "../../store";

import {IButtonLink} from "../../types";

const ButtonLink = ({title, link, clickCallback}: IButtonLink) => {

    const {theme} = useSelector((state: RootState) => state.MatchingGameStore);

    return (
        <button className={`${theme === 'dark' ? 'border-neutral-400' : 'border-neutral-900'} 
                big:border-2 border-4 border-dashed mobile:w-[455px] big:w-56 tablet:w-[300px] 
                rounded-3xl flex items-center hover:scale-105 hover:border-amber-500`}
                onClick={clickCallback}>
            <Link className={'relative inline-block big:text-base tablet:text-2xl mobile:text-5xl w-full py-3.5'}
                  to={link}>
                {title}
            </Link>
        </button>
    )
};

export default ButtonLink;