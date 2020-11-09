import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';
import Card from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detalleProduct } from '../../Actions/action';

const Product = ({ product }) => {

    const productS1 = useSelector(state => state.products);

    const [click, setclick] = useState({
        clicked: ''
    })

    const dispatch = useDispatch();

    const clickAdd = (e) => {
        setclick({
            clicked: <Card />
        })

    }

    return (

        <Container className="card container-fluid lg-col-12 d-sm-inline-flex pagination" style={{ width: "18rem" }}>
            <img src={product.thumbnail} className="card-img-top" alt="esta es una imagen" />
            <div className="card-body">
                <p className="card-text">Descripción: {product.title}</p>
                <p className="card-text">${product.price}{' '}{product.currency_id}</p>
                <p className="card-text">Condición: {product.condition}</p>
                <p className="card-text">Stock: {product.available_quantity}</p>
                <Link to={'/detalle'}><Button data={product.id} variant="primary" type="button" onClick={() => { dispatch(detalleProduct(product)); clickAdd(product) }}>Ver mas</Button></Link>
            </div>

        </Container>
    );
}


export default Product;