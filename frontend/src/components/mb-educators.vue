<template lang="pug">
  div.educators
    mb-markdown(:markdown="markdown")
</template>

<script>
export default {
  props: ['markdown']
}
</script>
