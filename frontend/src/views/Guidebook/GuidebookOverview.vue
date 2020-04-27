<template lang="pug">
  mb-markdown(:markdown="markdown")
</template>

<script>
import markdown from "./markdown/GuidebookOverview.md";

export default {
  data() {
    return {
      markdown
    }
  }
}
</script>