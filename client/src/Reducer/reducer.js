import { BUSCAR_PRODUCTOIDS, DETALLE_PRODUCTO } from "../Actions/action";

const initalStore = {
    products: [],
    detalle_producto: []
}

export default (state = initalStore, actions) => {
    switch (actions.type) {

        case BUSCAR_PRODUCTOIDS: {
            return {
                products: actions.producto.data
            }
        }
        case DETALLE_PRODUCTO: {
            return {
                ...state,
                detalle_producto: actions.products

            }
        }
        default: return state
    }
}