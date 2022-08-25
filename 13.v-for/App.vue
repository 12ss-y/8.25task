<template>
  <div>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        <span>{{ index }}</span>
        <span>{{ item }}</span>
      </li>
    </ul>

    <ol>
      <li v-for="(key) in stuArr" :key="key">
        <span>{{ key }}</span>
      </li>
    </ol>

    <ul>
      <li v-for="(value, key) in obj" :key="key">
        <span>{{ value }}</span>
        <span>{{ key }}</span>
      </li>
    </ul>

    <ul>
      <li v-for="item in num" :key="item">
        <span>{{ item }}</span>
      </li>
    </ul>

    <ul>
      <li v-for="(item, index) in str" :key="index">
        <span>{{ index }}</span>
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: ["h", "s", "a"],
      obj: {
        name: "张三",
        age: 18,
      },

      stuArr: [
        {
          id: 1001,
          name: "孙悟空",
          sex: "男",
          hobby: "吃桃子",
        },
        {
          id: 1002,
          name: "猪八戒",
          sex: "男",
          hobby: "背媳妇",
        },
      ],

      num: 10,

      str: "hello",
    };
  },
  methods: {},
};
</script>
// scoped样式只作用于当前Vue文件，不加scoped样式会作用于所有的Vue文件
<style scoped></style>