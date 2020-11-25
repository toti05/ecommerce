import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from '../Search/Search';
import styles from './navbar.module.css';
import { Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ordenarAscendente, ordenarDescendete, productoNuevos, productoUsados } from '../../Actions/action';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const products1 = useSelector(state => state.products1);
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
        <nav className="navbar navbar-expand-lg navbar-light bg-primary mb-3 container-fluid sm-col-12 ">

            <h3 className="navbar-brand font-weight-bold text-white">Mercado Libre</h3>
            <div>
                <ul style={{ display: 'flex', listStyle: 'none' }}>
                    <li>
                        <Dropdown >
                            <Dropdown.Toggle variant="outline-primary  text-white mr-4 mt-2 " id="dropdown-basic">
                                Filtrar
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#!"><Link to={'/filtros'} onClick={() => dispatch(ordenarAscendente(products1))}>Precio ascendente</Link></Dropdown.Item>
                                <Dropdown.Item href="#!"><Link to={'/filtros'} onClick={() => dispatch(ordenarDescendete(products1))}>Precio descendente</Link></Dropdown.Item>
                                <Dropdown.Item href="#!"><Link to={'/filtros'} onClick={() => dispatch(productoNuevos(products1))}>Condicion nuevo</Link></Dropdown.Item>
                                <Dropdown.Item href="#!"><Link to={'/filtros'} onClick={() => dispatch(productoUsados(products1))}>condicion usado</Link></Dropdown.Item>
                            </Dropdown.Menu>

                            {/* <div class="form-check form-check-inline">
                                <input type="checkbox" class="form-check-input" id="materialInline2" />
                                <label class="form-check-label" for="materialInline2">Usados</label>
                            </div> */}

                        </Dropdown>

                    </li>
                    <li >
                        <Search />
                    </li>
                </ul>
            </div>
            <button onClick={topFunction} id="myBtn" className={styles.myBtn} title="Go to top"><i className="fas fa-chevron-up"></i></button>
        </nav>
    )
}

export default NavBar;


