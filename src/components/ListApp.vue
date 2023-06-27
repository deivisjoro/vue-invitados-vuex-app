<script setup>
    import { computed } from 'vue';
    import { useStore } from 'vuex';
    const store = useStore();
    
    const personas = computed(()=>{
        return store.getters.getPersonas;
    })

</script>

<template>

    <div>
        <h3>Lista de Invitados</h3>
        <ul class="list-group">
            <li v-for="(persona, i) in personas" :key="i" class="list-group-item">
                <router-link :to="`/details/${i}`">
                    {{ persona.nombre }}
                </router-link>
            </li>
        </ul>
    </div>
    
</template>

<style scoped>

</style>