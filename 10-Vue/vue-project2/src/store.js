import { computed, reactive } from "vue";

const store = reactive({
    people: [],
    push(name, lastName) {
        this.people.push({name, lastName});
    }
});

const peopleCount =  computed(() => store.people.length);

export {
    store,
    peopleCount
};
