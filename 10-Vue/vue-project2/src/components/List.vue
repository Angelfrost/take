<script setup>
import { store, peopleCount } from '../store.js';

defineProps({
    heading: String
})

</script>

<template>
    <h1>{{ heading }}</h1>
    <ol>
        <li v-for="p in store.people">{{p.name}} {{p.lastName}}</li>
    </ol>
    <p>Liczba osób: {{peopleCount}}</p>
</template>
