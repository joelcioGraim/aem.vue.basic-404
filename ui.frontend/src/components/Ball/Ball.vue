<template>
  <div class="div-container">
     <!-- <img :class="className" :src="img.src" /> -->
     <img class="home-img-ball" src="/content/dam/vue/ball.png"/>
  </div>
</template>

<script>
// Imports

export default {
  name: 'Ball',
  props: {
    img: {
      type: Object
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
.home-img-ball {
  position: absolute;
  width: 400px;
  margin-top: 107px;
}

@media screen and (max-width: 450px) {
  .home-img-ball {
    width: 345px;
  }
}

</style>
