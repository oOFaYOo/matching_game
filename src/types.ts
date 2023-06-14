import React from "react";

export interface IMatchingGameState {
    theme: 'dark' | 'light';
    topic: string;
    amount: string;
}

export interface ICard {
    title: string;
    image: string;
}

export interface ITile {
    image: string;
}

export interface IButtonLink {
    title: string;
    link: string;
    clickCallback?: React.MouseEventHandler<HTMLButtonElement>;
}

