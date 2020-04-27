<template lang="pug">
  mb-markdown(:markdown="markdown")
</template>

<script>
import markdown from "./markdown/GuidebookInstructions.md";

export default {
  data() {
    return {
      markdown
    }
  }
}
</script>