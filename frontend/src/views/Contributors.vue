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

</template>

<style scoped>
.result {
  border: 1px solid grey;
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
        const { data } = await apiService.get(
          `https://api.github.com/repos/MintbeanHackathons/MintbeanPlatform/contributors`
        );
        const contributors = data;
        for (const contributor of contributors) {
          const { data } = await apiService.get(contributor.url);
          contributor.name = data.name;
          contributor.portfolio = data.blog;
        }
        this.contributors = contributors;
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
