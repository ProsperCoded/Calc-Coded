<template>
  <div class="grid-5x3 button-main-grid">
    <CalcButton value="/" @click="evaluateExpression(Exp.division)">
      <DivisionIcon />
    </CalcButton>
    <CalcButton value="^" @click="evaluateExpression(Exp.exponent)">
      <PowerIcon
    /></CalcButton>
    <CalcButton value="square-root" @click="evaluateExpression(Exp.squareRoot)">
      <SquareRootIcon />
    </CalcButton>

    <CalcButton value="9" @click="addNumber(9)"> 9 </CalcButton>
    <CalcButton value="8" @click="addNumber(8)"> 8 </CalcButton>
    <CalcButton value="7" @click="addNumber(7)"> 7 </CalcButton>
    <CalcButton value="6" @click="addNumber(6)"> 6 </CalcButton>
    <CalcButton value="5" @click="addNumber(5)"> 5 </CalcButton>
    <CalcButton value="4" @click="addNumber(4)"> 4 </CalcButton>
    <CalcButton value="3" @click="addNumber(3)"> 3 </CalcButton>
    <CalcButton value="2" @click="addNumber(2)"> 2 </CalcButton>
    <CalcButton value="1" @click="addNumber(1)"> 1 </CalcButton>
    <CalcButton value="0" @click="addNumber(0)" style="grid-column: -1 / 2">
      0
    </CalcButton>
    <CalcButton
      value="."
      @click="evaluateExpression(Exp.decimal)"
      style="grid-row: 5/6"
    >
      .
    </CalcButton>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CalcButton from "./CalcButton.vue";
import { Exp } from "@/types";
import DivisionIcon from "@/assets/icons/DivisionIcon.vue";
import SquareRootIcon from "@/assets/icons/SquareRootIcon.vue";
import PowerIcon from "@/assets/icons/PowerIcon.vue";
export default defineComponent({
  name: "ButtonMainGrid",
  components: {
    CalcButton,
    DivisionIcon,
    SquareRootIcon,
    PowerIcon,
  },
  data() {
    return {
      Exp,
    };
  },
  emits: ["addNumber", "evaluateExpression"],
  methods: {
    addNumber(n: number | string) {
      this.$emit("addNumber", n);
    },
    evaluateExpression(e: Exp) {
      this.$emit("evaluateExpression", e);
    },
  },
});
</script>
<style lang="scss" scoped>
.button-main-grid {
  justify-items: stretch;
  align-items: stretch;
  width: 100%;
  height: 100%;
  padding: 2%;
  // gap: 0.5em;

  row-gap: 3vw;
  column-gap: 3vw;
  @media screen and (min-width: 800px) {
    row-gap: 1.5vw;
    column-gap: 1.5vw;
  }
  direction: rtl;
  grid-area: L;
}
</style>
