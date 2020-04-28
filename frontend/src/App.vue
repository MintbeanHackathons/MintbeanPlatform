<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/scores">Scores</router-link> | 
      <router-link to="/guidebook">Hackathon Guidebook</router-link>
    </div>
    <div class="content-container">
      <router-view />
    </div>
  </div>
</template>

<style lang="css">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
}

#nav {
  padding: 30px;
}

.content-container {
  max-width: 768px;
  margin: auto;
}

a {
  font-weight: bold;
  color: #2c3e50;
}
a {
  color: #42b983;
}

table, th, td {
  border: 1px solid grey;
  border-collapse: collapse;
}

th, td {
  padding: 7px 12px;
}
</style>
