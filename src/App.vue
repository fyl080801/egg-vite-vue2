<script>
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  setup() {
    const text = ref('');

    return {
      text,
      serverdata: window.SERVER_DATA,
    };
  },
});
</script>

<template>
  <div>
    <h2>{{ serverdata }}</h2>
    <input v-model="text" />
    <p>{{ text }}</p>
  </div>
</template>
