<template lang="pug">
  div
    h1 Scores for {{ email }}
    h2(v-if="this.errorMessage") {{ errorMessage }}
    div(v-for="score in scores" class="result")
      .section
        mb-a(:href="score.event.githubUrl" nofollow) 
          h2 {{score.event.title}}
          mb-a(:href="score.event.eventUrl" nofollow)
            p Original Event Listing
      .section
        p Date: {{ score.event.date }} | Status: {{ score.isScored ? "Scoring Complete" : "Scoring Pending" }}
      .section
        h3 Participant Details:
        p Github: 
          mb-a(:href="score.githubId" nofollow) {{ score.githubId }}
        p Email: 
          mb-a(:href="score.email" nofollow) {{ score.email }}
      .section
        h3 Submitted Project Details:
        p Source Code: 
          mb-a(:href="score.pullRequestUrl" nofollow) Click here
      .section
        h1 Final Score: {{ score.finalScore }}%
      .section
        h2 Aesthetics: {{ score.aesthetics.score }}%
        p(style="white-space: pre-line") {{ score.aesthetics.comments || "No comments."}}
      .section
        h2 Code Quality: {{ score.codeQuality.score }}%
        p(style="white-space: pre-line") {{ score.codeQuality.comments || "No comments." }}
      .section
        h2 Code Review: {{ score.codeReview.score }}%
        p(style="white-space: pre-line") {{ score.codeReview.comments || "No comments." }}
</template>

<style scoped>
.result {
  border: 1px solid grey;
  padding: 5px;
  margin-bottom: 16px;
}
.section {
  border-bottom: 1px solid grey;
}
</style>

<script>
import { ApiService } from "../services/apiService";

export default {
  name: "Scores",
  props: ["email"],
  data() {
    return {
      scores: [],
      errorMessage: null
    };
  },
  created() {
    const apiService = new ApiService();

    apiService
      .get(`/api/v1/score/${this.email}`)
      .then(response => {
        this.scores = response.data;
        this.errorMessage = null;
      })
      .catch(({ request }) => {
        this.scores = [];
        if (request.status === 404) {
          this.errorMessage = "No scores found for that email.";
        } else {
          this.errorMessage = "Failed to fetch results.";
        }
      });
  }
};
</script>
