import axios from 'axios';
export const BUSCAR_PRODUCTOIDS = "BUSCAR_PRODUCTOIDS";
export const DETALLE_PRODUCTO = "DETALLE_PRODUCTO";

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