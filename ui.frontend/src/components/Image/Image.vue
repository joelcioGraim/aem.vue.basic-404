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
img {
  max-width: 45vw;
  min-width: 20vw;
  margin-top: 15%;
}
</style>
