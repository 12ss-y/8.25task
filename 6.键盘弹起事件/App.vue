<template>
  <div>
    <!-- <input type="text" @keydown.enter="onInput"> -->
    <input type="text" @keydown.esc="onInput">

  </div>
</template>
<script>
export default {
  data() {
    
    return {};
  },
  methods: {
    onInput() {
      console.log('键盘弹起事件');
    }
    }
};
</script>
// scoped样式只作用于当前Vue文件，不加scoped样式会作用于所有的Vue文件
<style scoped>

</style>
