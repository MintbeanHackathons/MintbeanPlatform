<template lang="pug">
  div
    h1 Contributors
    h2(v-if="this.errorMessage") {{ errorMessage }}
    div(v-for="contributor in contributors" class="result")
      table(style='width:100%')
        tr
          th Name
          th Github
          th Portfolio
          th LinkedIn
        tr
          td {{ contributor.name }}
          td 
            mb-a(:href="contributor.html_url" :v-if="contributor.login") {{contributor.login}}
          td 
            mb-a(:href="contributor.portfolio" :v-if="contributor.portfolio") Portfolio
          td
            mb-a(:href="contributor.linkedin" :v-if="contributor.portfolio") LinkedIn

</template>

<style scoped>
.result {
  padding: 5px;
  margin-bottom: 16px;
}
</style>

<script>
import { ApiService } from "../services/apiService";

export default {
  name: "Contributors",
  data() {
    return {
      contributors: [],
      errorMessage: null,
    };
  },
  created() {
    new ApiService()
    .get('/api/v1/contributors')
    .then(({ data }) => {
      this.contributors = data;
      this.errorMessage = null;
    })
    .catch(e => {
      console.error(e);
      this.contributors = [];
      this.errorMessage = "Failed to fetch contributors";
    })
  
  },
};
</script>
