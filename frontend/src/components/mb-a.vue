<template lang="pug">
  a(:href="href" :rel="rel" target="_blank")
    slot
</template>

<script>
export default {
  props: {
    href: String,
    nofollow: Boolean
  },
  computed: {
    rel: function() {
      return `noopener noreferrer ${this.nofollow || ""}`;
    }
  }
};
</script>
