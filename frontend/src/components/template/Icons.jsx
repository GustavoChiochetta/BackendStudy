import React from 'react';
import './Icons.css'

export default props =>
    <a href={props.link}>
        <i className={props.className}></i> {props.title}
    </a>