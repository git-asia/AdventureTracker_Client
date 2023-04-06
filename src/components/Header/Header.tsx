import React, {SyntheticEvent, useContext, useState} from 'react';
import {SearchContext} from "../../contex/search.context";

import './Header.scss';
import logo200 from "../images/logo200.png";


export const Header = () => {
    const {search, setSearch} = useContext(SearchContext)
    const [inputVal, setInputVal] = useState(search);

    function setSearchFromLocalState(e: SyntheticEvent) {
        e.preventDefault();
        setSearch(inputVal);
    }

    return (
        <header>
            <div className="head-wrapper">
                <div className="logo-wrapper">
                    <img className="logo" src={logo200} alt="icon" />
                    <h1>Adventure Tracker</h1>
                </div>

                <form onSubmit={setSearchFromLocalState}>
                    <input type="text" placeholder="Wyszukaj" value={inputVal} onChange={e => setInputVal(e.target.value)}/>
                    <button className="btn-search">Wyszukaj</button>
                </form>
                {/*<Btn to="/add" text="Dodaj ogłoszenie"/>*/}
            </div>
        </header>
    );
};

