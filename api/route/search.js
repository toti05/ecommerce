const server = require('express').Router();
const axios = require('axios');

let cache = {};


server.get('/', (req, res) => {
    let search = req.query.query;
    // if (!search) {
    //     console.log('entro')
    //     return res.json([]);
    // }
    if (!cache.hasOwnProperty(search)) {
        axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`)
            .then(rest => {
                let products = rest.data.results.map((product, i) => {
                    return ({
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        currency_id: product.currency_id,
                        available_quantity: product.available_quantity,
                        thumbnail: product.thumbnail,
                        condition: product.condition
                    })
                })
                cache[search] = products
                console.log('trajo de mercado libre');
                res.json(cache[search]);
            })
            .catch(err => {
                res.send('No trajo informacion del producto ' + err);
            })
    } else {
        console.log('trajo de cache')
        res.json(cache[search]);
    }
})

module.exports = server;