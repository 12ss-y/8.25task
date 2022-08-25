<template>
  <div>
    {{ msg | toUpper }}
  </div>
</template>

<script>


export default {
  data() {
    return {
     msg:'hi'
    };
  },
  filters: {
    toUpper(msg) {
      return msg.toUpperCase()
    }
  }
};
</script>

<style scoped>

</style>