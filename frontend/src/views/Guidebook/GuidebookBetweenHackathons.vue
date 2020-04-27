<template lang="pug">
  mb-markdown(:markdown="markdown")
</template>

<script>
import markdown from "./markdown/GuidebookBetweenHackathons.md";

export default {
  data() {
    return {
      markdown
    }
  }
}
</script>