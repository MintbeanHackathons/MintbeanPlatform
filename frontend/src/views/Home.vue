<template lang="pug">
  div.home
    img(alt="Vue logo" src="../assets/logo.png")
    div.hello
      h1 Mintbean
      h3 A Software Developer Talent Incubator
      p We work to accelerate the careers, skillsets, and professional networks of software developers globally. 
      h3 Essential Links
        ul
          li
            router-link(to="/scores") Scores
          li
            mb-a(href="https://www.eventbrite.ca/o/mintbean-28752300031") Upcoming Events
          li
            mb-a(href="https://github.com/MintbeanHackathons") Github
</template>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<script>
// @ is an alias to /src
export default {
  name: "Home"
};
</script>
