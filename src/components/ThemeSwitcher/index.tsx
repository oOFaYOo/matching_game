import React from "react";

import {Switch} from "@mui/material";

import {useDispatch, useSelector} from "react-redux";
import {setTheme} from "../../store/slice";
import {RootState} from "../../store";

import sun from './../../images/sun.png'
import moon from './../../images/moon.png'

const ThemeSwitcher = () => {

    const {theme} = useSelector((state: RootState) => state.MatchingGameStore);
    const dispatch = useDispatch();

    return (
        <>
            <div className={'big:flex flex-row items-center mobile:hidden tablet:hidden'}>
                <img src={sun} className={`${theme === 'dark' ? 'grayscale' : ''} w-20 h-20`}/>
                <Switch data-testid={'switch'} id={'theme-switcher'} color={'default'} checked={theme !== 'light'}
                        onChange={(e) => {
                            const theme = e.currentTarget.checked ? 'dark' : 'light';
                            localStorage.setItem('theme', theme)
                            dispatch(setTheme(theme));
                        }}/>
                <img src={moon} className={`${theme === 'dark' ? '' : 'grayscale'} w-20 h-20`}/>
            </div>
            <div className={'flex flex-row items-center big:hidden block'}>
                {
                    <img src={theme === 'dark' ? sun : moon}
                         className={'mobile:w-48 mobile:h-48 tablet:w-36 tablet:h-36'}
                         onClick={() => {
                             localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
                             dispatch(setTheme(theme === 'dark' ? 'light' : 'dark'));
                         }}/>
                }
            </div>
        </>
    )
}

export default ThemeSwitcher;