<template lang="pug">
  mb-markdown(:markdown="markdown")
</template>

<script>
import markdown from "./markdown/GuidebookFrequentlyAskedQuestions.md";

export default {
  data() {
    return {
      markdown
    }
  }
}
</script>