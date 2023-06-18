import React from 'react';

import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";

import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {setAmount, setTopic} from "../../store/slice";

import ThemeSwitcher from "../../components/ThemeSwitcher";
import ButtonLink from "../../components/ButtonLink";

const Menu = () => {

    const dispatch = useDispatch();
    const {theme, topic, amount} = useSelector((state: RootState) => state.MatchingGameStore);

    const handleChangeTopic = (event: SelectChangeEvent) => {
        dispatch(setTopic(event.target.value));
    };
    const handleChangeAmount = (event: SelectChangeEvent) => {
        dispatch(setAmount(event.target.value));
    };

    const nums = [8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36];
    const topics = ['Animals', 'Food', 'Fruits and vegetables'];

    return (
        <div className={`${theme === 'dark' ? 'bg-neutral-900 text-neutral-400' : 'bg-neutral-100 text-neutral-900'} 
        flex flex-col items-center justify-center gap-12 h-full w-full`}>
            <ThemeSwitcher/>
            <FormControl>
                <InputLabel
                    sx={theme === 'dark' ? {color: 'rgb(163 163 163)'} : {color: 'rgb(23 23 23)'}}
                    id="demo-simple-select-label"
                >Topic</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    data-testid="select1"
                    value={topic}
                    label="Topic"
                    onChange={handleChangeTopic}
                    className={'big:w-56 mobile:w-[455px] tablet:w-[300px]'}
                    sx={
                        theme === 'dark' ? {color: 'rgb(163 163 163)'} : {color: 'rgb(23 23 23)'}
                    }
                    MenuProps={{
                        PaperProps: {
                            style: {
                                borderRadius: '15px',
                            }
                        }
                    }}
                >
                    {
                        topics.map((item, index) =>
                            <MenuItem key={index}
                                      value={item.toLowerCase().replaceAll(' ', '_')}>
                                {item}
                            </MenuItem>)
                    }
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel
                    sx={theme === 'dark' ? {color: 'rgb(163 163 163)'} : {color: 'rgb(23 23 23)'}}
                    id="demo-simple-select-label"
                >Amount of cards</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    data-testid="select2"
                    value={amount}
                    label="Amount of cards"
                    onChange={handleChangeAmount}
                    className={'big:w-56 mobile:w-[455px] tablet:w-[300px]'}
                    sx={theme === 'dark' ? {color: 'rgb(163 163 163)'} : {color: 'rgb(23 23 23)'}}
                    MenuProps={{
                        PaperProps: {
                            style: {
                                maxHeight: '250px',
                                minWidth: '150px',
                                borderRadius: '15px',
                            }
                        }
                    }}
                >
                    {
                        nums.map((item, index) =>
                            <MenuItem key={index} value={item}>{item}</MenuItem>)
                    }
                </Select>
            </FormControl>
            <ButtonLink link={'/game'} title={'Start'} clickCallback={() => {
                dispatch(setTopic(topic ? topic : 'animals'));
                dispatch(setAmount(amount ? amount : '8'));
                localStorage.topic = topic ? topic : 'animals';
                localStorage.amount = amount ? amount : '8';
            }}/>
        </div>
    )
}

export default Menu;