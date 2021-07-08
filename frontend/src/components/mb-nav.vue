<template>
  <div id="nav" :class="{ ['u-center']: isHome }">
    <router-link to="/">Home</router-link>
    | <router-link to="/scores">Legacy Scores</router-link>
    | <router-link to="/guidebook">Guidebook</router-link>
    | <router-link to="/for-educators">For Educators</router-link>
    <span v-if="isLoggedIn">
      | {{username}} | <mb-a :href="logoutUrl">Log Out</mb-a>
    </span>
    <span v-else-if="!loginUrl"><!-- Waiting for login URL to arrive --></span>
    <span v-else>
      | <mb-a :href="loginUrl">Log In</mb-a>
      | <mb-a :href="registerUrl">Register</mb-a>
    </span>
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
    },
    username() {
      const user = this.$store.state.user;
      return user.firstName + " " + user.lastName;
    },
    isLoggedIn() {
      return !!this.$store.state.user;
    },
    loginUrl() {
      return this.$store.state.loginUrl;
    },
    logoutUrl() {
      return this.$store.state.logoutUrl;
    },
    registerUrl() {
      return this.$store.state.registerUrl;
    }
  }
};
</script>
