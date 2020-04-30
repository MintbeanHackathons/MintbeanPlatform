<template lang="pug">
  div.guidebook
    mb-markdown(:markdown="markdown")
</template>

<script>
export default {
  props: ['markdown']
}
</script>
