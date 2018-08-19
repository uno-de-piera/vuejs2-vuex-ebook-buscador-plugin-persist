export default {
    async fetchUsers ({commit}) {
        const response = await fetch('users.json')
        const data = await response.json()
        commit('setUsers', data)
    }
}
