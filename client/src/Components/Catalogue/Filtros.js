import React, { useEffect } from 'react';
import Card from './Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { paginacion } from '../../Actions/action'

const Filtros = () => {

    const products2 = useSelector(state => state.products);
    const paginacion2 = useSelector(state => state.paginacion);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(paginacion(products2, 1))
    }, [products2, dispatch])

    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {
                    paginacion2.length === 0 ? <h3 className='mt-3'>Necesita buscar algun producto</h3>
                        :
                        paginacion2.map(product => {
                            return <Card key={product.id} product={product} />
                        })

                }
            </div>

        </>
    );
}

export default Filtros;