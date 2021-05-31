<template>
  <svg class="icon" aria-hidden="true" :style="css">
    <use :xlink:href="`#${iconfont}`"></use>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Icon',
  props: {
    iconfont: {
      type: String,
      default: ''
    },
    css: {
      type: Object,
      default: ''
    }
  }
})
</script>
