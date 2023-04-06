import React, {SyntheticEvent, useState} from 'react';
import {Button} from "../common/Button/Button";
import {geocode} from "../../utils/geocoding";
import {apiUrl} from "../../config/api";

import './AddPost.scss';

export const AddPost = () => {
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState('');
    const [form, setForm] = useState({
        title: '',
        date: '',
        duration: '',
        kind: '',
        tags: '',
        description: '',
        url: '',
        iframe: '',
        coordinates: '',
    });

    const savePost = async (e: SyntheticEvent) => {
        e.preventDefault();

        setLoading(true);

        try {
            const {lat, lon} = await geocode(form.coordinates);

            const res = await fetch(`${apiUrl}/post`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...form,
                    lat,
                    lon,
                }),
            });
            const data = await res.json();

            setId(data.id);

        } finally {
            setLoading(false);
        }
    };

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };

    if (loading) {
        return <h2>Trwa dodawanie posta...</h2>;
    }

    if (id) {
        return <h2>Twój post "{form.title}" został poprawnie dodany do serwisu.</h2>;
    }

    return (
        <div className="form-wrapper">
        <form action="" className="add-post" onSubmit={savePost}>
            <h1>Dodaj wycieczkę</h1>
            <p>
                <label>
                    Tytuł <br/>
                    <input
                        type="text"
                        name="title"
                        required
                        maxLength={100}
                        value={form.title}
                        onChange={e => updateForm('title', e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    Data <br/>
                    <input
                        type="date"
                        name="date"
                        required
                        value={form.date}
                        onChange={e => updateForm('date', e.target.value)}
                    /> <br/>
                </label>
            </p>
            <p>
                <label>
                    Długość (dni) <br/>
                    <input
                        type="number"
                        name="duration"
                        required
                        value={form.duration}
                        onChange={e => updateForm('duration', e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    Rodzaj aktywności <br/>
                    <input
                        type="string"
                        name="kind"
                        required
                        maxLength={100}
                        value={form.kind}
                        onChange={e => updateForm('kind', e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    Tagi <br/>
                    <input
                        type="string"
                        name="tags"
                        maxLength={100}
                        value={form.tags}
                        onChange={e => updateForm('tags', e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    Opis <br/>
                    <textarea
                        name="description"
                        maxLength={2000}
                        value={form.description}
                        onChange={e => updateForm('description', e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    URL do mapy <br/>
                    <input
                        type="url"
                        name="url"
                        maxLength={300}
                        value={form.url}
                        onChange={e => updateForm('url', e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    iframe <br/>
                    <input
                        type="string"
                        name="iframe"
                        maxLength={200}
                        value={form.iframe}
                        onChange={e => updateForm('iframe', e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    Koordynaty lub adres<br/>
                    <input
                        type="text"
                        name="coordinates"
                        required
                        value={form.coordinates}
                        onChange={e => updateForm('coordinates', e.target.value)}
                    /><br/>
                    <small>Poprawny format koordynatów: <br/>
                        48.9218356, 19.1802922</small>
                </label>
            </p>
            <Button text="Zapisz"/>
        </form>
        </div>
    );
}
