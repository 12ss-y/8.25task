<template>
  <div>
    <div>
      {{ msg }}<br/>
      <span v-for="(item, index) in arr" :key="index">
        <input type="checkbox" v-model="hobby" :value="item" />
        {{ item }}
      </span>
    </div>

    <div>
      <ul>
        <li v-for="(item, index) in hobby" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "请选择你喜欢的专栏",
      hobby: [],
      arr: ["科幻", "喜剧", "动漫", "冒险", "科技", "军事", "娱乐", "奇闻"],
    };
  },
  // 声明函数
  methods: {},
};
</script>
// scoped样式只作用于当前Vue文件，不加scoped样式会作用于所有的Vue文件
<style scoped>
</style>
