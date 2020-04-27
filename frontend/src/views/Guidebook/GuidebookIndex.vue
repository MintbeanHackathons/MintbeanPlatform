<template lang="pug">
  mb-markdown(:markdown="markdown")
</template>

<script>
import markdown from "./markdown/GuidebookIndex.md";

export default {
  data() {
    return {
      markdown
    }
  }
}
</script>