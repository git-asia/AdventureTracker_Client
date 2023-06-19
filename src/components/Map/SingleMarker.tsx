import React, { useEffect, useState } from 'react';
import { PostEntity } from 'types';
import { apiUrl } from '../../config/api';
import { Link } from 'react-router-dom';

interface Props {
    id: string;
}

export const SingleMarker = (props: Props) => {
	const [post, setPost] = useState<PostEntity | null>(null);

	useEffect(() => {

		(async () => {

			const res = await fetch(`${apiUrl}/post/${props.id}`);
			const data = await res.json();

			setPost(data);

		})();
	}, [props.id]);

	if (post === null) {
		return <p>Wczytywanie...</p>;
	}

	return <>
		<h1>{post.title}</h1>
		<p>{post.kind}</p>
		{!!post.url && <p><a href={post.url} target="_blank" rel="noreferrer">mapy.cz</a></p>}
		<br/>
		<Link className="btn view" to={`/post/${props.id}`}> Zobacz
		</Link>
	</>;
};

