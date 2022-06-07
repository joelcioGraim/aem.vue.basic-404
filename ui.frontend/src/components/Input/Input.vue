<template>
    <input
        :class="classes"
        :type="type"
        :name="name"
        :placeholder="placeholder"
        v-model="value"
        :required="required"
        v-on:change="signalChange"
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
      ],
      value: ''
    }
  },
  methods: {
    signalChange: function (evt) {
      localStorage.setItem(evt.target.name, evt.target.value)
    }
  }

}

</script>

<style lang="scss" scoped>
.input__input {
    width: 45%;
    height: 50px;
    position: relative;
    margin-bottom: 1rem;
    background: transparent;
    border: 1px solid #fff;
    border-radius: 50px;
    color: rgb(252, 252, 252);
    text-indent: 4em;
    margin-left: 30%;
    margin-top: 2%;
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

 @media screen and (max-width: 450px) {
   .input__input {
      width: 137%;
   }
 }

</style>
