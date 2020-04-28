<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/scores">Legacy Scores</router-link> | 
      <router-link to="/guidebook">Guidebook</router-link>
    </div>
    <div class="content-container">
      <router-view />
    </div>
    <div class="accent-bar top"/>
    <div class="accent-bar bottom"/>
  </div>
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