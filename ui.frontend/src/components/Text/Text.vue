<template>
  <div :class="className" :style="cssVars">
    <div
      v-if="richText"
      :id="modelId"
      data-rte-editelement
      v-html="getRichTextContent()"
    ></div>
    <div v-else :id="modelId" data-rte-editelement v-html="text"></div>
  </div>
</template>

<script>
import DOMPurify from 'dompurify'
import extractModelId from '../../utils/extract-model-id'

export default {
  name: 'Text',
  props: {
    cqPath: {
      type: String
    },
    richText: {
      type: Boolean
    },
    text: {
      type: String
    },
    className: {
      type: String
    },
    showOps: {
      type: String,
      default: 'none'
    }
  },
  computed: {
    modelId () {
      return extractModelId(this.cqPath)
    },
    cssVars () {
      return {
        '--exibeOps': this.showOps
      }
    }
  },
  methods: {
    getRichTextContent () {
      return DOMPurify.sanitize(this.text)
    }
  }
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Montserrat:wght@500&family=Space+Mono:wght@400;700&display=swap');

.ops {
  display: var(--exibeOps);
  text-align: center;
  width: 222px;
  height: 48px;
  position: relative;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #E9B425;
  padding-left: 37%;
  padding-top: 2%;
}
.login {
width: 79px;
height: 45px;
position: relative;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 45px;
color: #fff;
padding-left: 30%;
padding-top: 8%;
}
.continuar {
width: 270px;
height: 52px;
position: relative;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #fff;
padding-left: 30%;
}
.ola-text {
width: 115px;
height: 90px;
position: relative;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 60px;
line-height: 90px;
color: #fff;
padding-left: 30%;
padding-top: 15%;
}

.custom-text-1 {
  color: green;
}
.custom-text-2 {
  color: red;
}
.text-label {
font-family: 'Inconsolata';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 25px;
letter-spacing: -0.08em;
text-transform: uppercase;
color: #333333;
}
.text-format-1 {
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 700;
  font-size: clamp(0.65em, 4vw, 4em);
  line-height: 70px;
  letter-spacing: -0.035em;
  color: #333333;
  padding-left: 6rem;
  margin-top: 18%;
}
.text-format-2 {
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 400;
  font-size: clamp(0.2em, 1.6vw, 1.6em);
  line-height: 36px;
  letter-spacing: -0.035em;
  color: #4F4F4F;
  padding-right: 18rem;
  padding-left: 6rem;
  margin-top: 7%;
}

@media screen and (max-width: 800px) {
  .text-format-1 {
    font-size: clamp(2em, 3vw, 3em) !important;
    margin-left: -3rem !important;
    padding-right: 0rem !important;
  }
  .text-format-2 {
    font-size: clamp(1em, 1vw, 1em) !important;
    margin-left: -3rem !important;
    padding-left: -4rem !important;
    padding-right: 2rem !important;
  }
  @media screen and (max-width: 450px) {
    .text-format-1 {
      margin-left: -2rem !important;
      font-size: clamp(2em, 3vw, 3em) !important;
    }
    .text-format-2 {
      font-size: clamp(0.9em, 1.6vw, 1.6em) !important;
      margin-left: -2rem !important;
      padding-right: 4rem !important;
    }
  }

  // @media screen and (max-width: 340px) {
  //   .text-format-1 {
  //     margin-left: -19% !important;
  //   }
  //   .text-format-2 {
  //     margin-left: -19% !important;
  //   }
  // }
}

</style>
