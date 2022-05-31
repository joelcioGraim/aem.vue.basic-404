<template>
  <button :class="items">{{ text }}</button>
</template>

<script>

export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: 'Botão'
    },
    backgroundColor: {
      type: String,
      default: 'rgb(65,120,205)'
    }
  },
  data () {
    return {
      items: [
        'c-button',
        'c-t'
      ]
    }
  }

}

</script>

<style lang="scss" scoped>
.c-button {
  cursor: pointer;
  letter-spacing: 0px;
  line-height: 1.75;
  min-width: 64px;
  // border-radius: 20px;
  box-shadow: none;
  padding: 4px 8px;
  transition-duration: 0.4s;
  background-color: black;
  color: white;
  border: none;
  width: 216px;
  height: 68px;
  margin-top: 18%;
  margin-left: 22%;
  text-transform: uppercase;
  font-family: 'Space Mono';
}

</style>
