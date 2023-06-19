import React, { useEffect, useState } from 'react';
import { PostEntity } from 'types';
import { apiUrl } from '../config/api';
import { Loader } from '../components/common/Loader/Loader';


export const PostsList = () => {
	const [postsList, setPostsList] = useState<PostEntity[] | null>(null);

	useEffect(() => {

		(async () => {

			setPostsList(null);

			const res = await fetch(`${apiUrl}/post/posts`);

			setPostsList(await res.json());

		})();
	}, []);

	if (postsList === null) {
		return <Loader/>;
	}

	return (
		<div className="all-posts-wrapper">
			<h1>Wszystkie wycieczki</h1>
			{
				postsList.map(post => (
					<div key={post.id}>
						<p>Tytuł: {post.title}</p>
						<p>{post.date}</p>
						<p>{post.kind}</p>
					</div>
				)
				)
			}
		</div>
	);
};
