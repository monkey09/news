import axios from 'axios'

const state = {
  articles: null
}

const getters = {
  articles: state => state.articles
}

const actions = {
  async getNews ({ commit }) {
    const url = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=RO5FcfCBHjv8IXiEq4mSXRTGWF3JaXvp'
    const response = await axios.get(url)
    commit('SET_ARTICLES', response.data.results)
    return
  },
  async getWorld ({ commit }) {
    const url = 'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=RO5FcfCBHjv8IXiEq4mSXRTGWF3JaXvp'
    const response = await axios.get(url)
    commit('SET_ARTICLES', response.data.results)
    return
  },
  async getSports ({ commit }) {
    const url = 'https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=RO5FcfCBHjv8IXiEq4mSXRTGWF3JaXvp'
    const response = await axios.get(url)
    commit('SET_ARTICLES', response.data.results)
    return
  },
  async getArts ({ commit }) {
    const url = 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=RO5FcfCBHjv8IXiEq4mSXRTGWF3JaXvp'
    const response = await axios.get(url)
    commit('SET_ARTICLES', response.data.results)
    return
  },
  async getFood ({ commit }) {
    const url = 'https://api.nytimes.com/svc/topstories/v2/food.json?api-key=RO5FcfCBHjv8IXiEq4mSXRTGWF3JaXvp'
    const response = await axios.get(url)
    commit('SET_ARTICLES', response.data.results)
    return
  },
  async getMovies ({ commit }) {
    const url = 'https://api.nytimes.com/svc/topstories/v2/movies.json?api-key=RO5FcfCBHjv8IXiEq4mSXRTGWF3JaXvp'
    const response = await axios.get(url)
    commit('SET_ARTICLES', response.data.results)
    return
  },
  async getPolitics ({ commit }) {
    const url = 'https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=RO5FcfCBHjv8IXiEq4mSXRTGWF3JaXvp'
    const response = await axios.get(url)
    commit('SET_ARTICLES', response.data.results)
    return
  },
  async getTechnology ({ commit }) {
    const url = 'https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=RO5FcfCBHjv8IXiEq4mSXRTGWF3JaXvp'
    const response = await axios.get(url)
    commit('SET_ARTICLES', response.data.results)
    return
  },
  async getTravel ({ commit }) {
    const url = 'https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=RO5FcfCBHjv8IXiEq4mSXRTGWF3JaXvp'
    const response = await axios.get(url)
    commit('SET_ARTICLES', response.data.results)
    return
  },
  async getHealth ({ commit }) {
    const url = 'https://api.nytimes.com/svc/topstories/v2/health.json?api-key=RO5FcfCBHjv8IXiEq4mSXRTGWF3JaXvp'
    const response = await axios.get(url)
    commit('SET_ARTICLES', response.data.results)
    return
  }
}

const mutations = {
  SET_ARTICLES (state, payload) {
    state.articles = payload
  }
}

const articlesModule = {
  state,
  getters,
  actions,
  mutations
}

export default articlesModule