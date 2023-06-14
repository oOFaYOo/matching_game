import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Switch} from "@mui/material";
import {setTheme} from "../../store/slice";
import {RootState} from "../../store";
import sun from './../../images/sun.png'
import moon from './../../images/moon.png'

const ThemeSwitcher = () => {

    const {theme} = useSelector((state: RootState) => state.MatchingGameStore);
    const dispatch = useDispatch();

    return (
        <div className={'flex flex-row items-center'}>
            <img src={sun} className={`${theme === 'dark' ? 'grayscale' : ''} w-24 h-24`}/>
            <Switch data-testid={'switch'} id={'theme-switcher'} color={'default'} checked={theme !== 'light'}
                    onChange={(e) => {
                        const theme = e.currentTarget.checked ? 'dark' : 'light';
                        localStorage.setItem('theme', theme)
                        dispatch(setTheme(theme));
                    }}/>
            <img src={moon} className={`${theme === 'dark' ? '' : 'grayscale'} w-24 h-24`}/>
        </div>
    )
}

export default ThemeSwitcher;