<script setup>
    import { computed } from "vue";
    import { useRoute } from 'vue-router';
    import { useStore } from 'vuex';

    const route = useRoute();
    const store = useStore();
    
    const persona = computed(()=>{
        const index = route.params.index;
        return store.getters.getPersona(index);
    })
</script>

<template>

    <div>
        <div class="card" v-if="persona!=undefined">

            <h5 class="card-header">
                {{ persona.nombre }}
            </h5>

            <div class="card-body">
                <div class="card-text">
                    <p>Mail: {{ persona.email }}</p>
                    <p>Aporte: {{ persona.aporte }}</p>
                </div>
            </div>

        </div>

        <div v-else class="alert alert-danger" role="alert">
            No hay datos disponibles
        </div>

        <router-link to="/personas" class="btn btn-primary mt-3">
            Volver
        </router-link>
    </div>
    
</template>

<style scoped>

</style>