<template>
  <div class="c-computer">
    <img src="/content/dam/angularapp/compassuol-logo-white.png"/>
  </div>
</template>

<script>

export default {
  name: 'LoginComputer',
  props: {
    img: {
      type: String
    }
  }

}

</script>

<style scoped>
.c-computer {
  position: fixed;
  width: 58%;
  height: 100vh;
  background: url('/content/dam/angularapp/login.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: #1c1d20;
}

.c-container {
  float: right !important;
  
}

img {
  position: static;
  margin-left: 35%;
  margin-top: 1%;
  position: relative;
}

</style>
