<template>
    <b-row>
        <b-col cols="4">
            <label>Búsqueda por nombre</label>
            <b-form-input
                size="sm"
                type="search"
                placeholder="Introduce tu búsqueda"
                v-model="search"
            ></b-form-input>

            <label>¿Activo o Inactivo?</label>
            <b-form-select
                v-model="active"
                :options="active_options"
                class="mb-3"
            ></b-form-select>

            <label>¿Edad?</label>
            <b-form-select
                v-model="age"
                :options="age_options"
                class="mb-3"
            ></b-form-select>

            <b-btn
                size="lg"
                variant="danger"
                block
                @click="resetFilters"
            >
                Restablecer
            </b-btn>
        </b-col>

        <b-col v-if="users.length">
            <b-alert variant="success" show>
                Número de usuarios {{ users.length }}
            </b-alert>
            <b-card
                :title="`${user.name.first} ${user.name.last}`"
                :img-src="user.picture"
                img-fluid
                img-alt="image"
                img-top
                v-for="user in users"
                :key="user.id"
            >
                <p class="card-text">
                    Activo: {{ user.active }}<br />
                    Edad: {{ user.age }}<br />
                    {{ user.about }}
                </p>
            </b-card>
        </b-col>

        <b-col v-else>
            <b-alert variant="danger" show>
                No hay ningún usuario
            </b-alert>
        </b-col>
    </b-row>
</template>

<script>
    import {
        mapState,
        mapMutations,
        mapActions,
        mapGetters
    } from 'vuex'
    import { mapSetter  } from '../utils/vuex/mapSetter';
    export default {
        mounted () {
            this.fetchUsers()
        },
        data () {
            return {
                active_options: [
                    {value: 'false', text: 'Inactivo'},
                    {value: 'true', text: 'Activo'},
                ]
            }
        },
        methods: {
            ...mapActions('searchModule', ['fetchUsers']),
            ...mapMutations('searchModule',
                ['setSearch', 'setActive', 'setAge', 'resetFilters']
            )
        },
        computed: {
            age_options () {
                let ages = []
                for (let i = 10; i <= 80; i++) {
                    ages.push({value: i, text: `>= ${i}`},)
                }
                return ages
            },
            ...mapGetters('searchModule', {
                users: 'filteredUsers'
            }),
            ...mapSetter(
                mapState('searchModule', {
                    search: ({ filters }) => filters.search,
                    active: ({ filters }) => filters.active,
                    age: ({ filters }) => filters.age,
                }),
                //SETTERS
                {
                    search (val) { this.setSearch(val) },
                    active (val) { this.setActive(val) },
                    age (val) { this.setAge(val) },
                }
            )
        }
    }
</script>
