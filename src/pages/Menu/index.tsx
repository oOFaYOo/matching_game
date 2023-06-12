import React from 'react';
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            Menu
                <button className={'w-16 h-6'} >
                    <Link to={'/game'}>
                        Start
                    </Link>
                </button>

        </div>
    )
}

export default Menu;