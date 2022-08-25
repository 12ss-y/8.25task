<template>
  <div>
    <!-- // 事件修饰符: .stop,.prevent,.once 所有事件使用的修饰符 //
    键盘修饰符:.enter 给键盘事件使用 // v-model的修饰符 // - 只给v-model使用 //
    .trim去除数据中首尾空白字符, 中间的空白字符串不能去除 // .lazy
    相当于change事件,获取焦点后并且 值改变以后,再丢失焦点 后收集数据 //
    .number字符串型数字变成数字型 -->
    <input type="text" v-model.number="msg1" /><br />

    <input type="text" v-model.trim="msg2" /><br />

    <input type="text" v-model.lazy="msg3" /><br />

    <input type="text" v-model.lazy.number.trim="msg4" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg1: "",
      msg2: "",
      msg3: "",
      msg4: "",
    };
  },
  methods: {},
};
</script>
// scoped样式只作用于当前Vue文件，不加scoped样式会作用于所有的Vue文件
<style scoped></style>
