<template>
  <div>
    <div v-text="msg">hello</div>

    <div v-html="msg">hello</div>

  </div>
</template>
<script>
export default {
  data() {
    return {
     msg: '<i>哈啊哈哈哈</i>'
    };
  },
  methods: {},
};
</script>
// scoped样式只作用于当前Vue文件，不加scoped样式会作用于所有的Vue文件
<style scoped></style>
