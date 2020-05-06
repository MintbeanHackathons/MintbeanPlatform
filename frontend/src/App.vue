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
      <div class="version" :v-if="frontendVersion && backendVersion">
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

.version {
  text-align: center;
  color: $lightest;
}
</style>

<script>
import { VersionService } from "./services/versionService";
import { version } from '../package.json'

export default {
  name: "App",
  data() {
    return {
      version: null,
      frontendVersion: null,
      backendVersion: null,
      errorMessage: null
    };
  },
  created() {
    const versionService = new VersionService();

    versionService.frontendVersion()
      .then(version => this.frontendVersion = version)
      .catch(err => {
        this.frontendVersion = "Unknown";
      });

    versionService.backendVersion()
      .then(version => this.backendVersion = version)
      .catch(err => {
        this.backendVersion = "Unknown";
      });
  }
};
</script>
