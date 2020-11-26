import {
    BUSCAR_PRODUCTOIDS,
    DETALLE_PRODUCTO,
    PAGINACION,
    ORDENA_DESCENDENTE,
    ORDENA_ASCENDENTE,
    PRODUCTOS_NUEVOS,
    PRODUCTOS_USADOS
} from "../Actions/action";

const initalStore = {
    products: [],
    products1: [],
    detalle_producto: [],
    paginacion: [],
}

const reducer = (state = initalStore, actions) => {
    switch (actions.type) {

        case BUSCAR_PRODUCTOIDS: {
            return {
                ...state,
                products: actions.producto.data,
                products1: actions.producto.data
            }
        }

        case DETALLE_PRODUCTO: {
            return {
                ...state,
                detalle_producto: actions.products

            }
        }

        case PAGINACION: {
            return {
                ...state,
                paginacion: actions.products.slice(0, 30),

            }
        }

        case ORDENA_DESCENDENTE: {

            return {
                ...state,
                paginacion: actions.products.sort((a, b) => {

                    if (b.price > a.price) {
                        return 1;
                    }
                    if (a.price > b.price) {
                        return -1;
                    }
                    return 0;
                }).slice(0, 30)
            }
        }

        case ORDENA_ASCENDENTE: {

            return {
                ...state,
                paginacion: actions.products.sort((a, b) => {
                    if (a.price > b.price) {
                        return 1;
                    }
                    if (a.price < b.price) {
                        return -1;
                    }
                    return 0;
                }).slice(0, 30)

            }
        }

        case PRODUCTOS_NUEVOS: {
            return {
                ...state,
                products: actions.products.filter(producto => producto.condition === 'new'),
                filtrado: true
            }
        }

        case PRODUCTOS_USADOS: {
            return {
                ...state,
                products: actions.products.filter(producto => producto.condition === 'used'),
                filtrado: true
            }
        }


        default: return state
    }
}

export default reducer;