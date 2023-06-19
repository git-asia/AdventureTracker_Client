import React, { useEffect, useState } from 'react';
import { PostEntity } from 'types';
import { useParams } from 'react-router-dom';
import { apiUrl } from '../../config/api';
import { NotFoundView } from '../NotFoundView/NotFoundView';

import './SinglePostView.scss';

export const SinglePostView = () => {
	const [postInfo, setPostInfo] = useState<PostEntity | null>(null);
	const { idOfPost } = useParams();


	useEffect(() => {

		(async () => {

			const res = await fetch(`${apiUrl}/post/${idOfPost}`);

			setPostInfo(await res.json());

		})();
	}, []);

	if (postInfo === null) {
		return <NotFoundView/>;
	}

	const date = new Date(postInfo.date);
	const goodDate = date.toLocaleDateString('pl-PL');


	return (
		<div className='post-wrapper'>
			<div className="post-info">
				<h1>{postInfo.title}</h1>
				<p><strong>Kiedy: </strong>{`${goodDate}`}</p>
				<p><strong>Jak długo: </strong>{postInfo.duration} dni</p>
				<p><strong>Co: </strong>{postInfo.kind}</p>
				<p><strong>Tagi: </strong>{postInfo.tags}</p>
				<p><strong>Opis:</strong> {postInfo.description}</p>
				<br/>
				<p><a href={postInfo.url} target="_blank" rel="noreferrer">Link do mapy</a></p>
			</div>
			<iframe src={postInfo.iframe}></iframe>
		</div>
	);
};
