<template>
  <button :class="className" v-on:click="onClick">{{ text }}</button>
</template>

<script>

export default {
  name: 'Button',
  emits: ['exibeOla'],
  data () {
    return {
      page: ''
    }
  },
  props: {
    text: {
      type: String,
      default: 'Botão'
    },
    className: {
      type: String
    }
  },
  methods: {
    onClick () {
      this.page = window.location.pathname.split('/').slice(3)[0]

      switch (this.page) {
        case '404.html':
          this.$router.push({ path: '/content/vue/home.html' })
          this.$router.go()
          break
        case 'login.html':
          if ((localStorage.getItem('usuario') && localStorage.getItem('senha')) &&
          (localStorage.getItem('usuario') === 'admin' && localStorage.getItem('senha') === 'admin')) {
            this.$router.push({ path: '/content/vue/home.html' })
            this.$router.go()
          } else {
            this.$root.$emit('exibeOps', 'block')
          }
          break
        default:
          console.log(`Sorry, we are out of ${this.page}.`)
      }
    }
  }
}

</script>

<style lang="scss" scoped>
.c-button__form {
  letter-spacing: 0px;
  line-height: 1.75;
  min-width: 64px;
  border-radius: 50px;
  box-shadow: none;
  padding: 4px 8px;
  transition-duration: 0.4s;
  color: white;
  border: none;
  width: 45%;
  height: 50px;
  margin-top: 2%;
  margin-left: 30%;
  font-family: 'Poppins';
  position: relative;
  background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
}
.c-button__404 {
  cursor: pointer;
  letter-spacing: 0px;
  line-height: 1.75;
  min-width: 64px;
  box-shadow: none;
  padding: 4px 8px;
  transition-duration: 0.4s;
  background-color: black;
  color: white;
  border: none;
  width: 216px;
  height: 68px;
  margin-top: 18%;
  margin-left: 14%;
  text-transform: uppercase;
  font-family: 'Space Mono';
}

 @media screen and (max-width: 800px) {
   .c-button__404 {
      margin-left: 56%;
      margin-top: 9%;
   }
 }

 @media screen and (max-width: 450px) {
   .c-button__form {
      width: 252px;
   }
 }

</style>
