<template>
  <div>

  <HelloWorld />
  <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
  </div>

</template>

<script>
import HelloWorld from '../components/HelloWorld';

export default {
  components: {
    HelloWorld,
  },
};
</script>
