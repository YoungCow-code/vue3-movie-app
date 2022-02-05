import axios from 'axios'
import _uniqBy from 'lodash/uniqBy'

// 영화 검색 관련된 데이터 취급
export default{

    // module!
    namespaced: true,

    // data!
    state: () => ({
        movies: []
    }),

    // computed!
    getters: {
    },

    // methods!
    // 변이 ( store에서 변이에서만 데이터 수정가능)
    mutations: {
        updateState(state, payload){
            // { 'movies', 'message', 'loading'}
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
            })
        },
        resetMovies(state){
            state.movies = []
        }    
    },  
    // 비동기
    actions: {
        async searchMovies({commit, state}, payload){
            const { title, type, number, year} = payload
            const OMDB_API_KEY = '7035c60c'
            const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`)
            const { Search, totalResults } = res.data
            commit('updateState', {
                movies: _uniqBy(Search, 'imdbID') 
            })
            console.log(totalResults);
            const total = parseInt(totalResults, 10)
            const pageLength = Math.ceil(total / 10)

            if (pageLength > 1){
                for (let page=2; page <= pageLength; page += 1){
                    if(page > number/10){
                        break
                    }
                    const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`)
                    const { Search } = res.data
                    commit('updateState', {
                        movies: [...state.movies, ..._uniqBy(Search,'imdbID')]
                    })
                }
            }
        }
    }
}