import React, {useState} from 'react';
import {Map} from "./components/Map/Map";
import {SearchContext} from "./contex/search.context";
import {Routes, Route} from 'react-router-dom';
import {Header} from "./components/Header/Header";
import MultistepForm from "./components/MultistepForm/MultistepForm";



export const App = () => {
    const [search, setSearch] = useState('');

    return (
        <SearchContext.Provider value={{search, setSearch}}>
            <Header/>
            <Routes>
                <Route path="/" element={<Map/>} />
                <Route path="/form" element={<MultistepForm/>}/>
            </Routes>
        </SearchContext.Provider>
    );
};

