<template>
  <div id="app">
    <router-link to="/">
      <img class="medigo-logo" src="./assets/medigo-logo.png" alt="">
    </router-link>
    <h3 class="medigo-tagline">Solusi kesehatan anda</h3>
    <nav>
      <ul>
        <router-link to="/">
          <div>Home</div>
        </router-link>
        <router-link to="/dokter">
          <div>Lihat Dokter</div>
        </router-link>
      </ul>
    </nav>
    <div class="home-separator"></div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

.medigo-logo{
  width: 300px;
  margin:0
}

.medigo-tagline{
  margin: 0
}

.home-separator{
  width: 100%;
  height: 1px;
  background: grey;
  margin-top: 10px;
}

nav{
  display: flex;
  justify-content: center;
  margin-top: 16px;
}


nav ul{
  padding: 0;
  margin: 0;
  display: flex;
  width: 170px;
  justify-content: space-between;
  align-items: center;
}

nav ul a{
  text-decoration: none;
  font-weight: bold;
}

nav ul a div{
  background: rgb(59, 199, 209);
  color: white;
  border-radius: 4px;
  padding: 4px;
  transition: 0.5s;
}

nav ul a div:hover{
  background: rgb(64, 223, 235);
}

nav p{
  margin: 0
}

</style>
