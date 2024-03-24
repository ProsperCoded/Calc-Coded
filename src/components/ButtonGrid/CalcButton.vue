<template>
  <div :class="{ 'calc-button': true, active: active }" tabindex="1">
    <span class="value"> <slot></slot></span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CalcButton",
  data() {
    return {
      active: false,
    };
  },
});
</script>
<style lang="scss">
@use "@/styles/_globalMixins.scss" as x;
.calc-button {
  // width: calc(4em + 2.5vw);
  // min-width: 5em;
  // min-height: 5em;
  width: 100%;
  height: 100%;
  // width: 5em;
  // height: calc(4em + 3vw);
  // padding: 1em;
  background-color: rgba(var(--code-light), 0.8);
  // box-shadow: 0px 3px 10px rgba(var(--code-dark), 0.8);
  @include x.centerFlex();
  @include x.clickable(rgba(var(--code-light), 0.9));
  border-radius: 12px;
  // aspect-ratio: 1/1;

  box-shadow: inset 0 0 0px transparent, 0 0 8px rgba(var(--code-dark), 0.8);
  transition: box-shadow 150ms ease-in;
  &:hover {
    box-shadow: inset 0 0 0px transparent, 0 0 10px rgba(var(--code-light), 0.5);
  }
  &:focus {
    box-shadow: inset 0 0 5px rgba(var(--code-dark), 0.8), 0 0 0px transparent;
  }
  .value {
    font-size: 3em;
    font-weight: 500;
  }
  outline: none;
}
</style>
