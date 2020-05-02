<template lang="pug">
  .educators
    mb-markdown(:markdown="markdown")
</template>

<script>
export default {
  props: ['markdown']
}
</script>
