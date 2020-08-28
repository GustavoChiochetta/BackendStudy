import React from 'react';
import './Icons.css'
import { Link } from 'react-router-dom';

export default props =>
    <Link to={props.link}>
        <i className={props.className}></i> {props.title}
    </Link>