<template lang="pug">
  .guidebook
    mb-markdown(:markdown="markdown")
</template>

<script>
export default {
  props: ['markdown']
}
</script>
