import axios from 'axios';
export const BUSCAR_PRODUCTOIDS = "BUSCAR_PRODUCTOIDS";
export const DETALLE_PRODUCTO = "DETALLE_PRODUCTO";
export const PAGINACION = "PAGINACION";
export const ORDENA_DESCENDENTE = "ORDENA_DESCENDENTE";
export const ORDENA_ASCENDENTE = "ORDENA_ASCENDENTE";
export const PRODUCTOS_NUEVOS = 'PRODUCTOS_NUEVOS';
export const PRODUCTOS_USADOS = 'PRODUCTOS_USADOS';

export function mostrarBusqueda(search) {
    return function (dispatch) {
        return axios.get(`http://localhost:3000/search/?query=${search}`)

            .then(json => {
                dispatch({
                    type: BUSCAR_PRODUCTOIDS,
                    producto: json
                })
            })
            .catch(err => { console.log(err) })

    }
}

export function detalleProduct(products) {
    return {
        type: DETALLE_PRODUCTO,
        products: products
    }
}

export function paginacion(products) {
    return {
        type: PAGINACION,
        products: products,
    }
}

export function ordenarDescendete(products) {
    return {
        type: ORDENA_DESCENDENTE,
        products: products
    }
}

export function ordenarAscendente(products) {
    return {
        type: ORDENA_ASCENDENTE,
        products: products
    }
}

export function productoNuevos(products) {
    return {
        type: PRODUCTOS_NUEVOS,
        products: products
    }
}

export function productoUsados(products) {
    return {
        type: PRODUCTOS_USADOS,
        products: products
    }
}