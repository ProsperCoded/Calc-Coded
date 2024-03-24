<template>
  <div class="button-top-row grid-1x4">
    <CalcButton @click="evaluateExpression(Exp.percent)"> % </CalcButton>
    <CalcButton @click="evaluateExpression(Exp.deg)"> deg </CalcButton>
    <CalcButton @click="evaluateExpression(Exp.AC)"> AC </CalcButton>
    <CalcButton @click="evaluateExpression(Exp.delete)" class="delete">
      <DeleteIcon />
    </CalcButton>
  </div>
</template>
<script lang="ts">
import { Exp } from "@/types";
import CalcButton from "./CalcButton.vue";
import DeleteIcon from "@/assets/icons/DeleteIcon.vue";
export default {
  name: "ButtonTopRow",
  emits: ["evaluateExpression"],
  data() {
    return {
      Exp,
    };
  },
  components: {
    CalcButton,
    DeleteIcon,
  },
  methods: {
    evaluateExpression(e: Exp) {
      this.$emit("evaluateExpression", e);
    },
  },
};
</script>
<style lang="scss">
.button-top-row {
  grid-area: T;
  margin-bottom: 2%;
  .calc-button {
    // height: min(4em, 80%);
    border-radius: 20px;
    width: 70%;
    min-height: fit-content;
    font-size: 0.8em;
    .value {
      font-weight: 400;
    }
  }
  .delete .icon {
    fill: transparent !important;
  }
}
</style>
