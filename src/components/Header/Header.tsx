import React, {SyntheticEvent, useContext, useState} from 'react';
import {SearchContext} from "../../contex/search.context";
import {Link} from "react-router-dom";

import './Header.scss';
import logo200 from "../images/logo200.png";
import {Button} from "../common/Button/Button";


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
                <Link className="link" to="/">
                    <img className="logo" src={logo200} alt="icon" />
                <h1 className="title">Adventure Tracker</h1>
                </Link>

                <div className="search-add-btn">
                    <form onSubmit={setSearchFromLocalState}>
                        <input type="text" placeholder="Wyszukaj" value={inputVal} onChange={e => setInputVal(e.target.value)}/>
                        <button className="btn-search">Wyszukaj</button>
                    </form>
                    <Button to="/form" text="Dodaj post"/>
                </div>


            </div>
        </header>
    );
};

