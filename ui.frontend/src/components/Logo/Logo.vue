<template>
  <div class="div-container">
     <!-- <img :class="className" :src="img.src" /> -->
     <img class="c-logo__home-header" src="/content/dam/vue/compassuol-logo-black.png"/>
  </div>
</template>

<script>
// Imports

export default {
  name: 'Logo',
  props: {
    img: {
      type: String
    },
    className: {
      type: String
    }
  }
}
</script>

<style scoped>
.div-container {
  font-family: 'Mark Pro';
  font-style: normal;
  color: #222222;
}
.c-logo__home-header {
  max-width: 20vw;
  margin-top: 1%;
  margin-left: 3%;
  height: 85px;
}

@media screen and (max-width: 450px) {
  .div-container {
    height: 14px;
  }
  .c-logo__home-header {
    height: 54px;
    max-width: 50vw;
    margin-top: 5%;
  }
}

</style>
