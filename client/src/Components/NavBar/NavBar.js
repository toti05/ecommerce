import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from '../Search/Search';
import styles from './navbar.module.css';
import { Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ordenarAscendente, ordenarDescendete, productoNuevo } from '../../Actions/action';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const products1 = useSelector(state => state.products);
    const dispatch = useDispatch();

    document.addEventListener("DOMContentLoaded", function () {
        let mybutton = document.getElementById("myBtn");


        window.onscroll = function () { scrollFunction() };


        function scrollFunction() {

            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }

    });

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <h3 className="navbar-brand">Mercado Libre</h3>
            <div>
                <ul style={{ display: 'flex', listStyle: 'none' }}>
                    <li>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                                Ordenar
            </Dropdown.Toggle>

                            <Dropdown.Menu>

                                <Dropdown.Item href="#!"><Link to={'/catalogue'} onClick={() => dispatch(ordenarAscendente(products1))}>Precio ascendente</Link></Dropdown.Item>
                                <Dropdown.Item href="#!"><Link to={'/catalogue'} onClick={() => dispatch(ordenarDescendete(products1))}>Precio descendente</Link></Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-primary ml-2 mr-2" id="dropdown-basic">
                                Filtrar
            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#!"><Link to={'/catalogue'} onClick={() => dispatch(productoNuevo(products1))}> Condicion nuevo</Link></Dropdown.Item>
                                <Dropdown.Item href="#/action-3">condicion usado</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li>
                        <Search />
                    </li>
                </ul>
            </div>
            <button onClick={topFunction} id="myBtn" className={styles.myBtn} title="Go to top"><i className="fas fa-chevron-up"></i></button>
        </nav>
    )
}

export default NavBar;


