import React, {SyntheticEvent, useState} from "react";
import { useMultistepForm } from "./useMultistepForm";
import { ExtraForm } from "./ExtraForm";
import { DescriptionForm } from "./DescriptionForm";
import { TripForm } from "./TripForm";
import {geocode} from "../../utils/geocoding";
import {apiUrl} from "../../config/api";

import './MultistepForm.scss';


type FormData = {
    coordinates: string
    title: string
    date: string
    duration: string
    kind: string
    tags: string
    description: string
    url: string
    iframe: string
}

const INITIAL_DATA: FormData = {
    coordinates: '',
    title: '',
    date: '',
    duration: '1',
    kind: '',
    tags: '',
    description: '',
    url: '',
    iframe: '',
}

function MultistepForm() {
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState('');
    const [data, setData] = useState(INITIAL_DATA)

    function updateFields(fields: Partial<FormData>) {
        setData(prev => {
            return { ...prev, ...fields }
        })
    }
    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =

        useMultistepForm([
            <TripForm {...data} updateFields={updateFields} />,
            <DescriptionForm {...data} updateFields={updateFields} />,
            <ExtraForm {...data} updateFields={updateFields} />,

        ])

    const onSubmit = async(e: SyntheticEvent) => {

        e.preventDefault()

        setLoading(true);

        try {
            const {lat, lon} = await geocode(data.coordinates);

            const res = await fetch(`${apiUrl}/post`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...data,
                    lat,
                    lon,
                }),
            });

            const formData = await res.json();

            if (!isLastStep) return next()

            setId(formData.id);


        } finally {

            setLoading(false);
        }
    };

    if (loading) {
        return <h2>Trwa dodawanie posta...</h2>;
    }

    if (id) {
        return <div className="success-info">
             <h1>Twoja wycieczka "{data.title}" została dodana do bazy.  </h1><br/>
              <h2> Czekamy na kolejną! </h2>  <br/>
              <p> 🧗‍♂️🏔 🚵‍♀️🏕</p>
        </div>
    }

    return (
        <div className="form-page">
            <form onSubmit={onSubmit}>
                <div className="current-step">
                    {currentStepIndex + 1} / {steps.length}
                </div>
                {step}
                <div className="bottom">
                    {!isFirstStep && (
                        <button type="button" onClick={back}>
                            Wróć
                        </button>
                    )}
                    <button className="submit-btn" type="submit">{isLastStep ? "Wyślij" : "Dalej"}</button>
                </div>
            </form>
        </div>
    )
}

export default MultistepForm
