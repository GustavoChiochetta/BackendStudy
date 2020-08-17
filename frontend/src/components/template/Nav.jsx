import React from 'react';
import './Nav.css';
import Icons from './Icons';

export default props => 
    <aside className="menu-area">
        <nav className="menu">
            {/*TODO: Refatorar em casa, criar componente para a tag a */}
            <Icons 
                link="#/"
                className="fa fa-home"
                title="Inicio"
            />
            <Icons 
                link="#/user"
                className="fa fa-users"
                title="Usuários"
            />
        </nav>
    </aside>