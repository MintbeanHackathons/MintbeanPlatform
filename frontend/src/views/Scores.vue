<template lang="pug">
  div
    div
      h1 Legacy Score Reporter
      p Please enter the email you used when registering on Eventbrite.
      p If you receive a 0%, or your score isn't found, it may not have been graded yet.
      p If you have any questions, please contact Monarch, Jenn, or any of the other organizers on Discord!
    div
      form(@submit="handleSearch")
        input(type="email" name="email" v-model="email" placeholder="Email")
        input(type="submit" value="Search")

</template>

<script>
export default {
  name: "Scores",
  methods: {
    handleSearch: function(e) {
      e.preventDefault();
      this.$router.push('/scores/' + this.email);
    }
  },
  data() {
    return {
      email: ""
    };
  }
};
</script>
