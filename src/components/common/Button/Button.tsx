import React from 'react';
import {Link} from "react-router-dom";

import './Button.scss'

interface Props {
    text: string;
    to?: string;
}

export const Button = (props: Props) => (
    props.to
        ? <Link className="btn" to={props.to}>{props.text}</Link>
        : <button>{props.text}</button>
);