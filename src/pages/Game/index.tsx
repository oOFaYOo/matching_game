import React from 'react';
import ButtonLink from "../../components/ButtonLink";
import ThemeSwitcher from "../../components/ThemeSwitcher";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import TileContainer from "../../components/TileContainer";
import {setAmount, setTopic} from "../../store/slice";

const Game = () => {
    const {theme} = useSelector((state: RootState) => state.MatchingGameStore);
    const dispatch = useDispatch();

    return (
        <div className={`${theme === 'dark' ? 'bg-neutral-900' : 'bg-neutral-100'} 
        flex flex-col items-center justify-start h-full w-full fixed overflow-auto`}>
            <header className={'relative w-full flex flex-row justify-between items-center px-6 py-2'}>
                <ButtonLink title={'Back to menu'} link={'/menu'} clickCallback={()=>{
                    dispatch(setTopic(''));
                    dispatch(setAmount(''));
                    localStorage.removeItem('topic');
                    localStorage.removeItem('amount');
                    localStorage.removeItem('cards');
                }}/>
                <ThemeSwitcher />
            </header>
            <TileContainer />
        </div>
    )
}

export default Game;