import React from 'react';
import './Nav.css'

export default props => 
    <aside className="menu-area">
        <nav className="menu">
            {/*TODO: Refatorar em casa, criar componente para a tag a */}
            <a href="#/">
                <i className="fa fa-home"></i> Início
            </a>
            <a href="#/user">
                <i className="fa fa-users"></i> Usuários
            </a>
        </nav>
    </aside>