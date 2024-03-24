<template>
  <div class="button-grid">
    <ButtonMainGrid
      @addNumber="(n:number)=>$emit('addNumber', n)"
      @evaluateExpression="(e: Exp)=> $emit('evaluateExpression', e)"
    />
    <ButtonTopRow
      @evaluateExpression="(e: Exp)=> $emit('evaluateExpression', e)"
    />
    <ButtonRightColumn
      @evaluateExpression="(e: Exp)=> $emit('evaluateExpression', e)"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ButtonMainGrid from "./ButtonMainGrid.vue";
import ButtonTopRow from "./ButtonTopRow.vue";
import ButtonRightColumn from "./ButtonRightColumn.vue";
import type { Exp } from "@/types";
document.addEventListener("keydown", (e) => {
  let key = e.key;
  console.log("key pressed was", key);
  if (key === "Enter") key = "=";
  let element = document.getElementsByClassName(`key-${key}`)[0];
  if (element) {
    (element as any).click();
    console.log("just clicked");
  }
});
export default defineComponent({
  name: "ButtonGrid",
  // props: {},
  components: {
    ButtonMainGrid,
    ButtonTopRow,
    ButtonRightColumn,
  },
});
</script>
<style lang="scss">
@use "@/styles/_globalMixins.scss" as x;
@include x.generateGridClasses(5, 5);
.button-grid {
  margin-top: 25%;
  // height: fit-content;
  width: 100%;
  // background-color: rgba(var(--code-light), 0.5);
  display: grid;
  grid-template-areas:
    "T T T T"
    "L L L R"
    "L L L R"
    "L L L R"
    "L L L R"
    "L L L R";
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.6fr 1fr 1fr 1fr 1fr;
}
</style>
