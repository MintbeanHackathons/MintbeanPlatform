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
            a(:href="contributor.html_url") {{contributor.login}}
          td 
            a(:href="contributor.portfolio") {{ contributor.portfolio && 'portfolio' }}
          td
            a(:href="contributor.linkedin") {{ contributor.linkedin && 'linkedin' }}

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
    (async () => {
      const apiService = new ApiService();
      try {
        const { data } = await apiService.get('/api/v1/contributors');
        this.contributors = data;
        this.errorMessage = null;
      } catch (e) {
        this.contributors = [];
        this.errorMessage = "Failed to fetch contributors.";
        console.log(e);
      }
    })();
  },
};
</script>
