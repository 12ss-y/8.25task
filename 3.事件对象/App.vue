<template>
  <div>
    <!-- v-on用来绑定点击事件 -->
    <!-- v-on事件名可以简写事件名@ -->
   <!-- 绑定函数 -->
   <!-- <button v-on:click="sayHi">点击</button> -->
   <button @click="sayHi('hi',$event)">点击</button>

  </div>
</template>
<script>
export default {
  // 声明函数
  methods: {
    sayHi(msg,e) {
      // alert('hi')
      console.log(msg);
      console.log("e",e);
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
