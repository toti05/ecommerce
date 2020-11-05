import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from '../Search/Search';
import { Dropdown } from 'react-bootstrap'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h3 className="navbar-brand">Mercado Libre</h3>
            <div>
                <ul style={{ display: 'flex', listStyle: 'none' }}>
                    <li>
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                Filtrar
                        </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-2">Precio ascendete</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Precio descendente</Dropdown.Item>
                                <Dropdown.Item href="#/action-4">Condicion nuevo</Dropdown.Item>
                                <Dropdown.Item href="#/action-5">Condicion usado</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li>
                        <Search />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;