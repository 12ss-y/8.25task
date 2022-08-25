<template>
  <div>
    <h1>{{msg}}</h1>

    <button @click="reverseWorld">翻转世界</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "Hello,world"
    }
  },
  methods: {
    reverseWorld() {
      this.msg = this.msg.split('').reverse().join('')
    }
  }
};
</script>
// scoped样式只作用于当前Vue文件，不加scoped样式会作用于所有的Vue文件
<style scoped>
/* h1 {
  background-color: blueviolet;
} */
</style>
