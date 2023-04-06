import React, {useEffect, useState} from "react";
import {PostEntity} from "types";
import {apiUrl} from "../../config/api";

interface Props {
    id: string;
}

export const SinglePost = (props: Props) => {
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
        <h2>{post.title}</h2>
        <p>{post.kind}</p>
        <hr/>
        <a href={post.url} target="_blank" rel="noreferrer">Otwórz mapę</a>
    </>;
}
