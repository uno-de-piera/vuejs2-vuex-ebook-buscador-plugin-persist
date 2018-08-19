export default {
    setUsers (state, users) {
        state.users = users;
    },
    setSearch (state, search) {
        state.filters.search = search
    },
    setAge (state, age) {
        state.filters.age = age
    },
    setActive (state, active) {
        state.filters.active = active
    },
    resetFilters (state) {
        state.filters = {
            search: '',
            active: 'true',
            age: 25,
        }
    }
}
