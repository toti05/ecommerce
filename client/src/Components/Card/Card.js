import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Card = () => {
    const product = useSelector(state => state.detalle_producto);
    console.log(product);
    return (

        <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row no-gutters">
                {/* <div className="col-md-4">
                    <img src="..." className="card-img" alt="..." />
                </div> */}
                <div className="col-md-8">
                    <div className="card-body">
                        <img src={product.thumbnail} className="card-img-top" alt="esta es una imagen" />
                        <p className="card-text">Descripción:{product.title}</p>
                        <p className="card-text">${product.price}</p>
                        <p className="card-text">Condición:{product.condition}</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
            <Button className='mr-3 h-25 w-25' variant="primary" type="button" onClick={() => window.history.back()} >Volver atras</Button>
        </div>

    );
}

export default Card;