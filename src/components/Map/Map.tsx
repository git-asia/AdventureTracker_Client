import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../contex/search.context';
import { SimplePostEntity } from 'types';
import { SingleMarker } from './SingleMarker';
import { apiUrl } from '../../config/api';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../../utils/fix-map-icon';
import './Map.scss';

export const Map = () => {
	const { search } = useContext(SearchContext);
	const [posts, setPosts] = useState<SimplePostEntity[]>([]);

	useEffect(() => {

		(async () => {

			const res = await fetch(`${apiUrl}/post/search/${search}`, {
				method: 'GET'
			});
			const data = await res.json();

			setPosts(data);

		})();
	}, [search]);

	return (
		<div className='map'>
			<MapContainer center={[52.0451318,20.176074]} zoom={6} >
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution="&copy; <a href='https://www.openstreetmap.org/opyright'>OpenStreetMap</a> & contributors"
				/>
				{
					posts.map((post =>
						<Marker key={post.id} position={[post.lat, post.lon]}>
							<Popup>
								<SingleMarker id={post.id!}/>
							</Popup>
						</Marker>
					))
				}
			</MapContainer>
		</div>
	);
};