import React, { useState } from 'react';
import styles from './Search.module.css';
import { ImSearch } from "react-icons/im";
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { mostrarBusqueda } from '../../Actions/action';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Search = () => {

    const dispatch = useDispatch();
    const [search, setSearch] = useState();

    const handlerSerch = (e) => {
        let value = e.target.value;
        setSearch(value);
    }

    const buscador = () => {
        // console.log(search)
        // if (search !== '') {
        //     dispatch(mostrarBusqueda(search));
        // } else {
        //     //dispatch(mostrarProductos());
        // }
        dispatch(mostrarBusqueda(search));
    }

    return (
        <form class="form-inline d-flex justify-content-center md-form form-sm active-purple-2 mt-2">
            <Link to={'/filtros'}><Button type="submit" className={styles.boton} variant="light" onClick={buscador}><ImSearch /></Button ></Link>
            <input className="form-control form-control-sm mr-3 w-75" className={styles.buscador} type="text" placeholder="Busque su producto"
                aria-label="Search" onChange={handlerSerch} />
        </form>

    )
}

export default Search;

{/* <div >
            <Link to={'/filtro'}><Button type="submit" className={styles.boton} variant="light" onClick={buscador}><ImSearch /></Button></Link>
            <input type="text" placeholder="Buscar productos"
                onChange={handlerSerch} />
        </div> */}