<template>
  <div>
    <div v-show="msg">hello</div>

    <div v-if="msg2">hi</div>

  </div>
</template>
<script>
export default {
  data() {
    return {
     msg: false,
     msg2: false,
    };
  },
  methods: {},
};
</script>
// scoped样式只作用于当前Vue文件，不加scoped样式会作用于所有的Vue文件
<style scoped></style>