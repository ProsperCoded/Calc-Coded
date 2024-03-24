<template>
  <div class="grid-5x1 button-right-column">
    <CalcButton value="*" @click="evaluateExpression(Exp.multiplication)">
      X
    </CalcButton>
    <CalcButton value="-" @click="evaluateExpression(Exp.subtraction)">
      -</CalcButton
    >
    <CalcButton value="+" @click="evaluateExpression(Exp.addition)">
      +</CalcButton
    >
    <CalcButton
      @click="evaluateExpression(Exp.equals)"
      style="grid-row: span 2"
      value="="
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
  row-gap: 3vw;
  column-gap: 3vw;
  width: 90%;
  justify-self: right;
  @media screen and (min-width: 800px) {
    padding: 1em;
    row-gap: 1.5vw;
    column-gap: 1.5vw;
  }
}
</style>
