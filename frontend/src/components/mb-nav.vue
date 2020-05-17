<template>
  <div id="nav" :class="{ ['u-center']: isHome }">
    <router-link to="/">Home</router-link> |
    <router-link to="/scores">Legacy Scores</router-link> |
    <router-link to="/guidebook">Guidebook</router-link> |
    <router-link to="/for-educators">For Educators</router-link>
  </div>
</template>

<style scoped>
.u-center {
  text-align: center;
}
</style>

<script>
export default {
  props: {
    path: String
  },
  computed: {
    isHome() {
      return this.path === "/";
    }
  }
};
</script>
