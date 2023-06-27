<script setup>

  import NavbarApp from "./components/NavbarApp.vue";

</script>

<template>

  <header class="header mb-3">
    <div class="brand">
        <span>Vue.js</span>
        <small>Aplicaciones practicas</small>
    </div>
    <ul>
        <li class="active"><a href="#">Invitados</a></li>
        <li><a href="#">opcion2</a></li>
        <li><a href="#">opcion3</a></li>
    </ul>
  </header>
  
  <NavbarApp class="mb-3" />
  
  <div class="container pb-5">
    <router-view></router-view>
  </div>

  <footer>&copy; Todos los derechos reservados - @deivisjoro - 2023</footer>

</template>

<style scoped>

  #app{
    color: #2c3e50
  }

  
  .header{
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #19177a;
    color: #fff;
    padding: 0 20px;
  }

  .header ul{
    display: flex;
    height: 100%;
    align-items: center;
    margin: 0;
  }

  .header li{
    padding: 10px;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .header li:hover, .header li.active{
    background-color: #fff;
  }

  .header li:hover a, .header li.active a{
    color: #19177a;
  }

  .header ul a{
    color: #fff;
    text-decoration: none;
  }

  .brand{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
  }

  .brand span{
    font-size: 22px;
  }

  footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 1000;
    background-color: #fff;
    color: #494a4b;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
