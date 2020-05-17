<template>
  <div id="app">
    <mb-nav :path="$route.path" />
    <div class="content-container">
      <router-view />
      <div class="versions" :v-if="frontendVersion && backendVersion">
        <p>Frontend: {{ frontendVersion }} | Backend: {{ backendVersion }}</p>
      </div>
    </div>
    <div class="accent-bar top" />
    <div class="accent-bar bottom" />
  </div>
</template>

<style lang="scss" scoped>
@import "./styles/colors";
@import "./styles/dimensions";

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
      return this.$store.state.frontendVersion;
    },
    backendVersion() {
      return this.$store.state.backendVersion;
    }
  },
  created() {
    this.$store.dispatch("checkAuth");
    this.$store.dispatch("setVersions");
  }
};
</script>
