<template lang="pug">
  div
    h1 Contributors
    p(v-if="this.errorMessage") {{ errorMessage }}
    div
      table(style='width:100%')
        thead
          tr
            th Name
            th Github
            th Portfolio
            th LinkedIn
        tbody
          tr(v-for="contributor in contributors" class="result")
            td {{ contributor.name }}
            td 
              mb-a(:href="contributor.html_url" :v-if="contributor.login") {{contributor.login}}
            td 
              mb-a(:href="contributor.portfolio" :v-if="contributor.portfolio") Portfolio
            td
              mb-a(:href="contributor.linkedIn" :v-if="contributor.linkedIn") LinkedIn

</template>

<style scoped>
.result {
  padding: 5px;
  margin-bottom: 16px;
}

@media 
only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px)  {

	table, thead, tbody, th, td, tr { 
		display: block; 
	}
	
	thead tr { 
		position: absolute;
		top: -9999px;
		left: -9999px;
	}
	
	tr { border: 1px solid #ccc; }
	
	td { 
		border: none;
		border-bottom: 1px solid #eee; 
		position: relative;
		padding-left: 50%; 
	}
	
	td:before { 
		position: absolute;
		top: 6px;
		left: 6px;
		width: 45%; 
		padding-right: 10px; 
		white-space: nowrap;
	}
	
	td:nth-of-type(1):before { content: "Name"; }
	td:nth-of-type(2):before { content: "Github"; }
	td:nth-of-type(3):before { content: "Portfolio"; }
	td:nth-of-type(4):before { content: "LinkedIn"; }
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
