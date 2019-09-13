import uuid from 'uuid/v4';

const state = {
    pausas: []
};

const actions = {
    INIT_PAUSE ({commit}, tipo) {
        console.log(tipo);
        commit('INIT_PAUSE');
    },
    END_PAUSE ({commit}, tipo) {
        commit('END_PAUSE', tipo)
    },
}

const mutations = {};

export default{
    state,
    actions,
    mutations
}