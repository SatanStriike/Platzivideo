import React from 'react';
import '../assets/styles/components/Search.scss';

const Search = () => (
    <section className="main">
        <h2 className="main__tittle">¿Que quieres ver hoy?</h2>
        <input className="main__tittle--input" type="text" placeholder="Buscar ..." />
    </section>
);

export default Search;