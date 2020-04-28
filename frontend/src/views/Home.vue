<template lang="pug">
  div
    img(alt="Vue logo" src="../assets/logo.png")
    div.hello
      h1 Mintbean
      h3 A Software Developer Talent Incubator
      p We work to accelerate the careers, skillsets, and professional networks of software developers globally. 
      h2 Essential Links
      ul.essential-links
        li
          router-link(to="/scores") Legacy Scores
        li
          router-link(to="/guidebook") Guidebook
        li
          mb-a(href="https://www.eventbrite.ca/o/mintbean-28752300031") Upcoming Events
        li
          mb-a(href="https://github.com/MintbeanHackathons") MintbeanHackathons Github
        li
          router-link(to="/guidebook/careerhack-hackathons") Mintbean CareerHack
        li
          mb-a(href="https://www.eventbrite.ca/o/mintbean-28752300031") Upcoming Events
        li
          mb-a(href="https://github.com/MintbeanHackathons") Github
</template>

<style lang="scss" scoped>
@import "../styles/colors";
@import "../styles/dimensions";
@import "../styles/mixins";

* {
  text-align: center;
}

.essential-links {
  ul {
    list-style-type: none;
  }
  li {
    @include respond-to('small') {
      display: inline-block;
      width: 100%;
      margin: vstep(1) hstep(0);
    }
    display: inline-block;
    margin: vstep(3) hstep(2);
  }
}
</style>

<script>
// @ is an alias to /src
export default {
  name: "Home"
};
</script>
