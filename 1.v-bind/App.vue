<template>
  <div>
    <!-- <h1>简单表达式</h1>
    <span>数字：{{1}}</span><br/>
    <span>字符串：{{"hello"}}</span><br/>

    <h1>复杂表达式</h1>
    <span>数组：{{["张三","李四","王二"]}}</span><br/>
    <span>{{1+1}}</span><br/>
    <span>{{new Date()}}</span><br/>
    <span>{{a}}</span><br/> -->

    <!-- <a href="http://www.baidu.com">广告</a> -->
    <!-- <a v-bind:href="url">广告</a> -->
    <!-- 简写形式v-bind -->
    <a :href="url">广告</a>

  </div>
</template>
<script>
export default {
  // 可以简写data(){}
  data: function () {
    return {
      // a:"哈哈哈哈",
      url:"http://www.baidu.com",
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
