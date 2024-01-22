<template>
  <div class="display">
    <h4 class="display__secondary">
      {{ secondaryExpression }}
    </h4>
    <h1 class="display__primary" ref="primaryDisplay">{{ expression }}</h1>
  </div>
</template>
<script lang="ts">
import { type Ref, defineComponent, ref, watchEffect, watch } from "vue";

export default defineComponent({
  name: "CalcDisplay",
  props: {
    expression: {
      type: String,
      required: true,
    },
    secondaryExpression: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const primaryDisplay = ref<HTMLHeadingElement>();
    watch(
      () => {
        return props.expression;
      },
      () => {
        if (primaryDisplay.value) {
          console.log(
            "moving right",
            primaryDisplay.value.scrollLeft,

            primaryDisplay.value.scrollWidth
          );
          primaryDisplay.value.scrollLeft = primaryDisplay.value.scrollWidth;
        }
      }
    );
    return {
      primaryDisplay,
    };
  },
});
</script>
<style lang="scss" scoped>
.display {
  height: 20%;
  width: 100%;
  text-align: right;
  line-height: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  letter-spacing: 0.4ch;
}
.display__primary {
  color: rgba(var(--code-dark), 0.6);
  text-shadow: -1px 1px 5px rgba(var(--code-dark), 0.4);
  font-size: 3.5em;
  font-weight: 600;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0 2rem;
  $border-radius: 2rem;
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: none; /* Adjust the color of the scrollbar track */
    border: 3px solid rgb(var(--code-light-dark));
    border-bottom-left-radius: $border-radius;
    border-bottom-right-radius: $border-radius;
    overflow: hidden;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(var(--code-light-dark));
    border-radius: $border-radius;
  }
  &::-webkit-scrollbar-thumb:hover {
    // background-color: color.adjust($color-light-purple, $blackness: 20%);

    // background-color: $color-light-blue;
    background-color: rgba(var(--code-light));
  }
}
.display__secondary {
  color: rgba(var(--code-dark), 0.4);
  font-size: 1.2em;
  margin-bottom: 0.5rem;
}
</style>
