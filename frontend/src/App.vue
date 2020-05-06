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
    </div>
    <div class="accent-bar top"/>
    <div class="accent-bar bottom"/>
    <div class="version">
      <p>Frontend Version: {{frontendVersion}}</p>
      <p>Backend Version: {{backendVersion}}</p>
    </div>
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
  margin: 10px;
  position: absolute;
  bottom: 0;
  right: 0;

  p {
    color: rgb(117, 117, 117);
    font-weight: 900;
  }
}
</style>

<script>
import { ApiService } from "./services/apiService";
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
    const apiService = new ApiService();
    
    this.frontendVersion = version;

    apiService
      .get(`/api/v1/version`)
      .then(res => (this.backendVersion = res.data))
      .catch(({ request }) => this.backendVersion = "Unknown");
  }
};
</script>
