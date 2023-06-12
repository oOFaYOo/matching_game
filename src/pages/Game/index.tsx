import React from 'react';
import {Link} from "react-router-dom";

const Game = () => {
    return (
        <div>
            Game
            <button className={'w-28 h-6'} >
                <Link to={'/menu'}>
                    Back to menu
                </Link>
            </button>
        </div>
    )
}

export default Game;