<template lang="pug">
  #app
    #nav
      router-link.mr-1.ml-1(to="/") Home
      | |
      router-link.mr-1.ml-1(to="/scores") Legacy Scores
      | |
      router-link.ml-1(to="/guidebook") Guidebook
      | |
      router-link.ml-1(to="/for-educators") For Educators
    .content-container
      router-view
    .accent-bar.top
    .accent-bar.bottom
</template>

<style lang="scss" scoped>
@import './styles/colors';
@import './styles/dimensions';

.accent-bar {
  position: fixed;
  left: 0;
  right: 0;
  height: vstep(1);
  background-color: $least-minty;
  margin-bottom: 0;
  padding-bottom: 0;

  &.top { top: 0; }
  &.bottom { bottom: 0; background-color: $least-blue }
}
</style>
