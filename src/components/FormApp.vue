<script setup>
    import { ref } from 'vue';
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router';

    const store = useStore();
    const router = useRouter();

    const nombre = ref("");
    const email  = ref("");
    const aporte = ref("");

    const error = ref(false);
    
    const addPersona = () => {
        if(nombre.value.trim()==='' || email.value.trim()==='' || aporte.value.trim()===''){
            error.value = true;
            return;
        }
        error.value = false;
        
        const persona = {
            nombre: nombre.value,
            email: email.value,
            aporte: aporte.value
        }

        store.dispatch('addPersona', persona);
        router.push('/personas');
    }

</script>

<template>

    <div>
        <h3>
            Añadir Invitados
        </h3>
        <div class="card" style="width:35rem">

            <div class="card-body">
                <h5 class="card-title">
                    Datos Invitado
                </h5>

                <div class="form-group">
                    <label for="nombre">Nombre</label>
                    <input 
                        type="text"
                        id="nombre"
                        v-model="nombre"
                        class="form-control"
                        placeholder="Ingrese el nombre del invitado" />
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input 
                        type="email"
                        id="email"
                        v-model="email"
                        class="form-control"
                        placeholder="Ingrese el email del invitado" />
                </div>
                <div class="form-group">
                    <label for="aporte">Aporta</label>
                    <input 
                        type="text"
                        id="aporte"
                        v-model="aporte"
                        class="form-control"
                        placeholder="Que aporta la persona?" />
                </div>
                <div>
                    <button class="btn btn-primary" @click="addPersona">Añadir</button>
                </div>
                <div v-if="error" class="alert alert-danger mt-3" role="alert">
                    Error: Todos los datos son obligatorios!
                </div>
            </div>

        </div>
    </div>
    
</template>

<style scoped>

</style>