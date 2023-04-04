import React, {SyntheticEvent, useContext, useState} from 'react';
import {Typography, AppBar, Button} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import logo200 from "../images/logo200.png";
import SearchIcon from '@mui/icons-material/Search';
import {SearchContext} from "../../contex/search.context";


export const Header = () => {
    const {search, setSearch} = useContext(SearchContext)
    const [inputVal, setInputVal] = useState(search);

    function setSearchFromLocalState(e: SyntheticEvent) {
        e.preventDefault();
        setSearch(inputVal);
    }

    return (
        <>
    <AppBar position="relative">
        <Toolbar>
            <img className="logo" src={logo200} alt="icon" height="40" />
            <Typography variant="h1" color="inherit" noWrap>Adventure Tracker</Typography>
            <Button color="inherit" endIcon={<SearchIcon color="inherit"/>}>
            <form className="search" onSubmit={setSearchFromLocalState}>
                <input type="text" placeholder="Wyszukaj" value={inputVal} onChange={e => setInputVal(e.target.value)}/>
            </form>
            </Button>
            {/*<Btn to="/add" text="Dodaj ogłoszenie"/>*/}
        </Toolbar>
    </AppBar>
        </>
    );
};

