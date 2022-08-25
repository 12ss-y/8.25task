<template>
  <div>
    <div
      v-for="(item, index) in arr"
      style="display: inline-block"
      :key="index">
      <input type="checkbox" v-model="CheckedArr" :value="item" />
      <span>{{ item }}</span>
    </div>

    <p>你选中的元素，累加的值和为：{{ isSum }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [9 , 15 , 19 , 25 , 29 , 31 , 48 , 57 , 62 , 79 , 87 ],
      CheckedArr: [],
    };
  },
  // 声明函数
  computed: {
    isSum() {
      return this.CheckedArr.reduce((sum, num) => {
        return (sum += num);
      }, 0);
    },
  },
};
</script>
// scoped样式只作用于当前Vue文件，不加scoped样式会作用于所有的Vue文件
<style scoped>
</style>
