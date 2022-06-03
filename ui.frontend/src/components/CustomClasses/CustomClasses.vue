<template>
  <div this-component-is-responsible-to-allow-custom-classes-on-aem></div>
</template>

<script>
export default {
  name: 'CustomClasses',
  mounted () {
    const containerLeft = document.querySelector('[cqpath="/content/vue/login/jcr:content/root/responsivegrid/container_466432675"] div')
    containerLeft.classList.add('c-container__form')

    // const containerRight = document.querySelector('cqpath="/content/vue/login/jcr:content/root/responsivegrid/container/container_1836019238"] div')
    // containerRight.classList.add('c-container__input')
  }
}
</script>

<style lang="scss">

.c-container__form {
  float: right;
}
</style>
