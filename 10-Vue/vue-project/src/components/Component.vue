<script>
export default {
    data() {
        return {
            name: '',
            lastName: '',
            people: []
        };
    },
    computed: {
        peopleCount() {
            return this.people.length;
        }
    },
    methods: {
        push() {
            this.people.push({
                name: this.name,
                lastName: this.lastName
            });
            this.name = '';
            this.lastName = '';
        }
    }
};
</script>

<template>
    <div>
        <h2>Dodaj nową osobę</h2>
        <form @submit.prevent="push">
            <input type="text" v-model="name" placeholder="Imię">
            <input type="text" v-model="lastName" placeholder="Nazwisko">
            <input type="submit" value="Dodaj">
        </form>
        <hr>
        <ol>
            <li v-for="p in people">{{ p.name }} {{ p.lastName }}</li>
        </ol>
        <p>Liczba osób: {{ peopleCount }}</p>
    </div>
</template>