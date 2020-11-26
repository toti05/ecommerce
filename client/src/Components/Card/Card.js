import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Card = () => {
    const product = useSelector(state => state.detalle_producto);
    console.log(product);
    return (
        <>
            {product.length === 0 ? <h3 className='mt-3'>Necesita buscar algun producto</h3>
                :
                <div className="card m-3  border-primary" style={{ maxWidth: '540px' }}>
                    <div className="row no-gutters">

                        <div className="col-md-8">
                            <div className="card-body font-weight-bold">
                                <img src={product.thumbnail} className="card-img-top" alt="esta es una imagen" />
                                <p className="card-text">Descripción: {product.title}</p>
                                <p className="card-text">Precio ${product.price}{' '}{product.currency_id}</p>
                                <p className="card-text">Condición: {product.condition}</p>
                                <p className="card-text">Stock: {product.available_quantity}</p>
                            </div>

                        </div>

                    </div>
                    <Button className='m-3 h-25 w-25' variant="primary" type="button" onClick={() => window.history.back()} >Volver atras</Button>
                </div>
            }
        </>
    );
}

export default Card;