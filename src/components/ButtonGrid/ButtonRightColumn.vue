<template>
  <div class="grid-5x1 button-right-column">
    <CalcButton @click="evaluateExpression(Exp.multiplication)"> X </CalcButton>
    <CalcButton @click="evaluateExpression(Exp.subtraction)"> -</CalcButton>
    <CalcButton @click="evaluateExpression(Exp.addition)"> +</CalcButton>
    <CalcButton
      @click="evaluateExpression(Exp.equals)"
      style="grid-row: span 2"
    >
      =
    </CalcButton>
  </div>
</template>
<script lang="ts">
import { Exp } from "@/types";
import CalcButton from "./CalcButton.vue";
export default {
  name: "ButtonRightColumn",
  data() {
    return {
      Exp,
    };
  },
  components: {
    CalcButton,
  },
  methods: {
    evaluateExpression(e: Exp) {
      this.$emit("evaluateExpression", e);
    },
  },
};
</script>
<style lang="scss" scoped>
.button-right-column {
  grid-area: R;
  justify-items: stretch;
  align-items: stretch;
  row-gap: calc(1em + 2vh);
  column-gap: calc(0.5em + 2vw);
  padding: 1em;
  width: 90%;
  justify-self: right;
  // position: relative;
  // &::before {
  //   position: absolute;
  //   content: "";
  //   height: 100%;
  //   width: 0.5em;
  //   background-color: rgba(var(--code-light), 0.8);
  //   top: 0;
  //   right: 105%;
  // }
}
</style>
