<template>
  <div :class="className">
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
    }
  },
  computed: {
    modelId () {
      return extractModelId(this.cqPath)
    }
  },
  methods: {
    getRichTextContent () {
      return DOMPurify.sanitize(this.text)
    }
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Montserrat:wght@500&family=Space+Mono:wght@400;700&display=swap');
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
  font-size: 60px;
  line-height: 70px;
  letter-spacing: -0.035em;
  color: #333333;
  padding-left: 5rem;
  margin-top: 7%;
}
.text-format-2 {
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.035em;
  color: #4F4F4F;
  padding-right: 7rem;
  padding-left: 5rem;
  margin-top: 4%;
}

</style>
