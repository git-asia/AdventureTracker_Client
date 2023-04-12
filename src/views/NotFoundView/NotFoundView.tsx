import React from 'react';
import {Button} from "../../components/common/Button/Button";

import './NotFoundView.scss'

export const NotFoundView = () => {
    return (
    <div className="error-info">
        <h2>Błędny adres 🛟</h2>
        <br/> <br/>
        <Button to="/" text="Wróć na stronę główną"/>
    </div>
        )
};