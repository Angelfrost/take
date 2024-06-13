<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { store } from '../store.js';

defineProps({
    heading: String
})

const name = ref('');
const lastName = ref('');

const router = useRouter();

function onSubmit() {
    store.push(name.value, lastName.value);
    router.push({name: 'list'});
}
</script>

<template>
    <h1>{{ heading }}</h1>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="name" placeholder="Imię">
        <input type="text" v-model="lastName" placeholder="Nazwisko">
        <input type="submit" value="Dodaj">
    </form>
</template>