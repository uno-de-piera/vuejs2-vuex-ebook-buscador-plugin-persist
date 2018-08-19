export default {
    filteredUsers (state) {
        let users = state.users;
        if (state.filters.search) {
            users = users.filter(
                user => user.name.first
                    .toLowerCase()
                    .includes(state.filters.search)
            )
        }
        if (state.filters.active) {
            users = users.filter(
                user => user.active === state.filters.active
            )
        }
        if (state.filters.age) {
            users = users.filter(
                user => user.age >= state.filters.age
            )
        }
        return users;
    }
}
