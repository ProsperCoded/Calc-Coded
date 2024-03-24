<script lang="ts">
// import type { defineComponent } from "vue";
import {
  defineComponent,
  reactive,
  ref,
  toRefs,
  type Ref,
  computed,
} from "vue";
import { RouterLink, RouterView } from "vue-router";
import CalcDisplay from "./components/CalcDisplay.vue";
import ButtonGrid from "./components/ButtonGrid/ButtonGrid.vue";
// import logoIco from "./assets/logo.png";
import { Exp } from "./types";
import { commaSeparateNumber, filterExpressionCharacters } from "@/utils";

const regexIntegers = /(\d+)(?=\W|$)/g;
const regexRealNumbers = /(\d+(\.\d+)?)(?=\W|$)/g;
const regexSymbolsWithDot = /[^0-9\\w]/g;
const regexSymbols = /[^0-9\\w\\.]/g;
const regexDot = /\./g;
export default defineComponent({
  name: "App",
  components: { CalcDisplay, ButtonGrid },
  setup() {
    const state = reactive({
      expression: "",
      secondaryExpression: "",
      result: 0,
    });
    const userFriendlyExpression = computed(() => {
      return filterExpressionCharacters(state.expression);
    });

    const userFriendlySecondaryExpression = computed(() => {
      return filterExpressionCharacters(state.secondaryExpression);
    });
    return {
      ...toRefs(state),
      userFriendlyExpression,
      userFriendlySecondaryExpression,
    };
  },
  methods: {
    addNumber(n: number | string) {
      if (!n && !this.expression) return;
      this.expression += n.toString();
      // console.log("expression", this.expression);
    },
    evaluateExpression(exp: Exp) {
      if (this.expression.length === 0 && exp !== Exp.decimal) return;
      switch (exp) {
        case Exp.decimal: {
          // const numbers = this.expression.match(regexRealNumbers);
          // if (numbers && numbers.pop()!.includes(".")) return;
          this.expression += ".";

          break;
        }
        case Exp.addition: {
          this.expression += "+";

          break;
        }
        case Exp.subtraction: {
          this.expression += "-";

          break;
        }
        case Exp.multiplication: {
          this.expression += "*";

          break;
        }
        case Exp.division: {
          this.expression += "/";

          break;
        }
        case Exp.exponent: {
          this.expression += "**";
          break;
        }
        case Exp.squareRoot: {
          this.secondaryExpression = `√(${this.expression})`;
          this.result = Math.sqrt(eval(this.expression));
          this.expression = this.result.toString();
          break;
        }
        case Exp.percent: {
          const numbers = this.expression.match(regexRealNumbers);
          const symbols = this.expression.match(regexSymbols);
          if (numbers?.length) {
            const lastIndex = numbers.length - 1;
            const newValue = (parseInt(numbers[lastIndex]) / 100).toString();
            let newExpression = "";
            this.expression.substring(this.expression.length - 1);
            for (let i = 0, s = -1; i <= lastIndex; i++, s++) {
              if (s !== -1 && symbols) {
                newExpression += symbols[s];
              }
              if (i === lastIndex) {
                newExpression += newValue;
              } else {
                newExpression += numbers[i];
              }
            }
            this.expression = newExpression;
          }
          break;
        }
        case Exp.equals: {
          this.result = eval(this.expression);
          this.secondaryExpression = this.expression;
          this.expression = this.result.toString();

          break;
        }
        case Exp.AC: {
          this.expression = "";

          this.secondaryExpression = "";
          this.result = 0;
          break;
        }
        case Exp.delete: {
          this.expression = this.expression.slice(0, -1);
          break;
        }
        default: {
          break;
        }
      }
    },
  },
});
</script>

<template>
  <div id="main">
    <img src="./assets/logo.ico" alt="" class="logo-icon" />
    <CalcDisplay
      :expression="userFriendlyExpression"
      :secondaryExpression="userFriendlySecondaryExpression"
    />
    <ButtonGrid
      @addNumber="(e: number|string) => {addNumber(e)}"
      @evaluateExpression="(e:Exp)=>{evaluateExpression(e)}"
    />
  </div>
</template>

<style lang="scss">
@use "./styles/_globalMixins.scss" as x;
.body {
  // background-image:
}
.logo-icon {
  width: 4rem;
  position: absolute;
  top: 1rem;
  left: 1rem;

  opacity: 0.5;
}
#app {
  // padding: 0 1rem;
}
#main {
  max-height: 95vh;
  height: fit-content;
  margin: 1vmin auto;
  position: relative;
  // border: 2px solid rgb(var(--color-dark));
  max-width: 90vw;
  border-radius: 1em;
  padding: 1em 2vmin;
  aspect-ratio: 2.7/4;
  background: radial-gradient(
    circle at bottom right,
    rgba(var(--code-light), 0.1),
    rgb(var(--code-light), 0.8) 40%
  );
  background-color: var(--color-accent);
}
</style>
