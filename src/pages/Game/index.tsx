import React, {useState} from 'react';
import ButtonLink from "../../components/ButtonLink";
import ThemeSwitcher from "../../components/ThemeSwitcher";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import TileContainer from "../../components/TileContainer";
import {setAmount, setTopic} from "../../store/slice";
import firework from '../../images/firework3.png'

const Game = () => {
    const {theme} = useSelector((state: RootState) => state.MatchingGameStore);
    const dispatch = useDispatch();

    const [win, setWin] = useState(false);

    return (
        <div className={`${theme === 'dark' ? 'bg-neutral-900' : 'bg-neutral-100'} 
        flex flex-col items-center justify-start h-full w-full fixed overflow-auto`}>
            <header className={'relative w-full flex flex-row justify-between items-center px-6 pt-1'}>
                <ButtonLink title={'Back to menu'} link={'/menu'} clickCallback={()=>{
                    dispatch(setTopic(''));
                    dispatch(setAmount(''));
                    localStorage.removeItem('topic');
                    localStorage.removeItem('amount');
                    localStorage.removeItem('cards');
                }}/>
                <ThemeSwitcher />
            </header>
            {
                win
                    ? <div className={'h-full w-full flex items-center justify-evenly'}>
                        <img src={firework} className={`${theme === 'dark' ? 'opacity-90' : ''} w-56 h-56`}/>
                        <p className={`${theme === 'dark'? 'text-neutral-400' : 'text-neutral-900'} text-5xl`}>YOU WON!</p>
                        <img src={firework} className={`${theme === 'dark' ? 'opacity-90' : ''} scale-x-[-1] w-56 h-56`}/>
                      </div>
                    : <TileContainer setWin={setWin} />
            }
        </div>
    )
}

export default Game;