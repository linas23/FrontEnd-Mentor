import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        links: []
    },
    getters: {
        links: state => state.links
    },
    mutations: {
        SET_LINK: (state, link) => {
            console.log(link)
            state.links.push(link)
        }
    },
    actions: {
        async  get_short_link({ commit }, link) {
            console.log(link)
            try {
                let options = {
                    method: 'post',
                    url: 'https://rel.ink/api/links/',
                    data: {
                        url: link
                    }
                }
                let { data: { hashid } } = await axios(options)
                let newLink = 'https://rel.ink/' + hashid
                commit('SET_LINK', { newLink, yourLink: link })

            } catch (e) {
                console.log(e)
            }
        }
    }

})


export default store