<template>
  <img :src="src" />
</template>

<script>
export default {
  name: 'Image',
  props: {
    src: {
      type: String
    }
  }
}
</script>

<style scoped>
.home-img-logo {
  width: 55% !important;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}
.home-img-ball {
  position: absolute;
  width: 400px;
  margin-top: 107px;
}

img {
  max-width: 45vw;
  min-width: 20vw;
  margin-top: 15%;
}
 @media screen and (max-width: 450px) {
   img {
      max-width: 60vw;
      margin-left: 15%;
   }
 }
</style>
