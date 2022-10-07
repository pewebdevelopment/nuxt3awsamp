<template>
  <div class="text-white bg-gray-800 flex justify-center">
    This is the Home Index Page
    <br/>
  </div>
    <div class="bg-gray-800 flex justify-center" >
    <h1 class=" text-white text-5xl font-bold underline pb-2">Hello world!</h1>
  
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const state = reactive({
      count: 0,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped></style>
