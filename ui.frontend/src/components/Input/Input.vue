<template>
    <input
        :class="classes"
        :type="type"
        :name="name"
        :placeholder="placeholder"
        v-model="value"
        :required="required"
    />
</template>

<script>

export default {
  name: 'Input',
  props: {
    type: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      classes: [
        'input__input'
      ]
    }
  }

}

</script>

<style lang="scss" scoped>
.input__input {
    width: 100%;
    height: 50px;
    position: relative;
    margin-bottom: 1rem;
    background: transparent;
    border: 1px solid #fff;
    border-radius: 50px;
    color: rgb(252, 252, 252);
    text-indent: 4em;
}

::placeholder {
    color: rgb(252, 252, 252);
}

//  @media screen and (max-width: 800px) {
//    .c-button {
//       margin-left: 56%;
//       margin-top: 9%;
//    }
//  }

//  @media screen and (max-width: 450px) {
//    .c-button {
//       margin-left: 16%;
//       margin-top: 15%;
//    }
//  }

</style>
