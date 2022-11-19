import axios from 'axios'

const state = () => ({
  products : [],
})

const mutations = {
  SET_PRODUCTS: (state, products) => {
       return state.products = products;
    },
}

const actions = {
    GET_PRODUCTS_FROM_API({commit}) {
        return axios('https://rangeweb.ru/test/products/', {
          method: "GET"
        })
          .then((products) => {
            commit('SET_PRODUCTS', products.data);
            return products;
          })
          .catch((error) => {
            console.log(error)
            return error;
          })
    },
}

const getters = {
    PRODUCTS: (state) => {
        return state.products;
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}