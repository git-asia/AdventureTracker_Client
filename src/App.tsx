import React, { useState } from 'react';
import { Map } from './components/Map/Map';
import { SearchContext } from './contex/search.context';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import MultistepForm from './components/Form/MultistepForm/MultistepForm';
import { NotFoundView } from './views/NotFoundView/NotFoundView';
import { SinglePostView } from './views/SinglePostView/SinglePostView';
import { PostsList } from './views/PostsListView';


export const App = () => {
	const [search, setSearch] = useState('');

	return (
		<SearchContext.Provider value={{ search, setSearch }}>
			<Header/>
			<Routes>
				<Route path="/" element={<Map/>} />
				<Route path="/form" element={<MultistepForm/>}/>
				<Route path="/post/:idOfPost" element={<SinglePostView/>}/>
				<Route path="/posts" element={<PostsList/>}/>
				<Route path="*" element={<NotFoundView/>}/>
			</Routes>
		</SearchContext.Provider>
	);
};

