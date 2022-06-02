<template>
  <div class="c-login-form" >
    <img src="/content/dam/angularapp/compassuol-logo-white.png"/>
  </div>
</template>

<script>
export default {
  name: 'LoginForm'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Montserrat:wght@500&family=Space+Mono:wght@400;700&display=swap');
.c-login-form {
  color: #e0e0e0;
  position: fixed;
  width: 58%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: 86% 100%;
  background-color: #1c1d20;
}

img {
  position: static;
  margin-left: 25%;
  margin-top: 1%;
  position: relative;
  display: none;
}
</style>
