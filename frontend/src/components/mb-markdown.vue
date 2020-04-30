<template lang="pug">
  div(v-html="markdown")
</template>

<script>
export default {
  props: ['markdown']
}
</script>
