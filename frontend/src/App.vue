<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/scores">Legacy Scores</router-link> | 
      <router-link to="/guidebook">Guidebook</router-link> |
      <router-link to="/for-educators">For Educators</router-link>
    </div>
    <div class="content-container">
      <router-view />
      <div class="versions" :v-if="frontendVersion && backendVersion">
        <p>Frontend: {{frontendVersion}} | Backend: {{backendVersion}}</p>
      </div>
    </div>
    <div class="accent-bar top"/>
    <div class="accent-bar bottom"/>
  </div>
</template>

<style lang="scss" scoped>
@import './styles/colors';
@import './styles/dimensions';

.accent-bar {
  position: fixed;
  left: 0;
  right: 0;
  height: vstep(1);
  background-color: $least-minty;
  margin-bottom: 0;
  padding-bottom: 0;

  &.top {
    top: 0;
  }
  &.bottom {
    bottom: 0;
    background-color: $least-blue;
  }
}

.versions {
  text-align: center;
  color: $lightest;
}
</style>

<script>
export default {
  name: "App",
  data() {
    return {
      version: null,
      errorMessage: null
    };
  },
  computed: {
    frontendVersion() {
      const v = this.$store.state.frontendVersion;
      console.log("frontendVersion in App.js is", v);
      return v;
    },
    backendVersion() {
      return this.$store.state.backendVersion;
    }
  },
  created() {
    this.$store.dispatch('checkAuth');
    this.$store.dispatch('setVersions');
  }
};
</script>
