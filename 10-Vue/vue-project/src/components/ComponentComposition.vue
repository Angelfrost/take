<script>
import {ref, computed} from 'vue';

export default {
    setup() {
        const name = ref('');
        const lastName = ref('');
        const people = ref([]);
    
        const push = () => {
            people.value.push({
                name: name.value,
                lastName: lastName.value
            });
            name.value = '';
            lastName.value = '';
        };

        const peopleCount = computed(() => people.value.length);

        return {
            name,
            lastName,
            people,
            push,
            peopleCount
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